# contact/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
import requests

# Your email and WhatsApp details
ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
WHATSAPP_PHONE = '+919968358455'
WHATSAPP_API_KEY = 'your_callmebot_api_key'  # (I'll explain how to get this for free)

@api_view(['POST'])
def contact_view(request):
    if request.method == 'POST':
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')

        if not all([name, email, message]):
            return Response({'error': 'All fields are required.'}, status=400)

        # Send email
        subject = f'New Contact Form Submission from {name}'
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        send_mail(
            subject,
            body,
            email,  # from email
            [ADMIN_EMAIL],  # to email
            fail_silently=False,
        )

        # Send WhatsApp Message (Optional - I'll explain setup below)
        try:
            whatsapp_message = f"New message from {name} ({email}): {message}"
            send_whatsapp_message(whatsapp_message)
        except Exception as e:
            print(f"WhatsApp sending failed: {e}")

        return Response({'success': 'Message sent successfully!'})

    return Response({'error': 'Invalid request'}, status=400)

def send_whatsapp_message(message):
    url = f"https://api.callmebot.com/whatsapp.php?phone={WHATSAPP_PHONE}&text={message}&apikey={WHATSAPP_API_KEY}"
    requests.get(url)
