# contact/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
import requests

# Your email and WhatsApp details
ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
WHATSAPP_PHONE = '+919968358455'
WHATSAPP_API_KEY = 'your_callmebot_api_key'  # Replace with your real key from CallMeBot
 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
import requests

ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
WHATSAPP_PHONE = '+919968358455'
WHATSAPP_API_KEY = 'your_callmebot_api_key'  # Replace with real API key

@api_view(['POST'])
def contact_view(request):
    try:
        # Use DRF's built-in request parser
        data = request.data
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return Response({'error': 'All fields are required.'}, status=400)

        subject = f'New Contact Form Submission from {name}'
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        send_mail(
            subject,
            body,
            email,
            [ADMIN_EMAIL],
            fail_silently=False,
        )

        # Optional: Send WhatsApp message
        try:
            whatsapp_msg = f"New message from {name} ({email}): {message}"
            send_whatsapp_message(whatsapp_msg)
        except Exception as e:
            print("WhatsApp error:", e)

        return Response({'success': True, 'message': 'Message sent successfully!'})

    except Exception as e:
        return Response({'error': f'An error occurred: {str(e)}'}, status=500)

def send_whatsapp_message(message):
    url = f"https://api.callmebot.com/whatsapp.php?phone={WHATSAPP_PHONE}&text={message}&apikey={WHATSAPP_API_KEY}"
    requests.get(url)

def send_whatsapp_message(message):
    url = (
        f"https://api.callmebot.com/whatsapp.php"
        f"?phone={WHATSAPP_PHONE}"
        f"&text={requests.utils.quote(message)}"
        f"&apikey={WHATSAPP_API_KEY}"
    )
    response = requests.get(url)
    print("WhatsApp response:", response.text)
