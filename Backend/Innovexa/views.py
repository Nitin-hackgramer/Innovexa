# contact/views.py
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.http import JsonResponse
import requests
from django.shortcuts import render

# Your email and WhatsApp details
ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
WHATSAPP_PHONE = '+919968358455'
WHATSAPP_API_KEY = 'your_callmebot_api_key'  # Replace with your real key from CallMeBot



@api_view(['POST', 'GET'])
def contact_view(request):
    if request.method == 'GET': 
        return render(request, 'contact.html')

    try:
        # DRF automatically parses JSON
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')

        # Validate fields
        if not all([name, email, message]):
            return JsonResponse({'error': 'All fields are required.'}, status=400)

        # Prepare message
        subject = f'New Contact Form Submission from {name}'
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        # Send Email
        send_mail(
            subject,
            body,
            email,
            [ADMIN_EMAIL],
            fail_silently=False,
        )

        # Send WhatsApp
        try:
            whatsapp_message = f"New message from {name} ({email}): {message}"
            send_whatsapp_message(whatsapp_message)
        except Exception as e:
            print(f"WhatsApp sending failed: {e}")

        return JsonResponse({'success': True, 'message': 'Message sent successfully!'})

    except Exception as e:
        return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)

def send_whatsapp_message(message):
    url = (
        f"https://api.callmebot.com/whatsapp.php"
        f"?phone={WHATSAPP_PHONE}"
        f"&text={requests.utils.quote(message)}"
        f"&apikey={WHATSAPP_API_KEY}"
    )
    response = requests.get(url)
    print("WhatsApp response:", response.text)
