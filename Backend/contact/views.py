from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import requests
import traceback

ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
WHATSAPP_PHONE = '+919968358455'
WHATSAPP_API_KEY = ''  # Leave blank if not used

@csrf_exempt
@api_view(['POST'])
def contact_view(request):
    try:
        print("🔔 Contact form API hit")
        data = request.data
        print("📦 Received data:", data)

        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return JsonResponse({'error': 'All fields are required.'}, status=400)

        subject = f'New Contact Form Submission from {name}'
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        send_mail(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            [ADMIN_EMAIL],
            fail_silently=False,
        )

        print("✅ Email sent")

        # WhatsApp message (optional)
        if WHATSAPP_API_KEY:
            try:
                whatsapp_message = f"New message from {name} ({email}): {message}"
                send_whatsapp_message(whatsapp_message)
                print("📨 WhatsApp sent")
            except Exception as e:
                print("❌ WhatsApp error:", e)

        return JsonResponse({'success': True, 'message': 'Message sent successfully!'})

    except Exception as e:
        print("🔥 Server error:", e)
        print(traceback.format_exc())  # Show full traceback in logs
        return JsonResponse({'error': 'Internal Server Error'}, status=500)


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
