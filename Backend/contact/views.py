# import logging
# from django.conf import settings
# logger = logging.getLogger(__name__)



# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from django.core.mail import send_mail
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.conf import settings
# import requests
# import traceback

# ADMIN_EMAIL = 'nitinkumar12082005@gmail.com'
# WHATSAPP_PHONE = '+919968358455'
# WHATSAPP_API_KEY = ''  # Leave blank if not used

# @csrf_exempt
# @api_view(['POST'])
# def contact_view(request):
#     try:
#         print("🔔 Contact form API hit")
#         data = request.data
#         print("📦 Received data:", data)

#         name = data.get('name')
#         email = data.get('email')
#         message = data.get('message')

#         if not all([name, email, message]):
#             return JsonResponse({'error': 'All fields are required.'}, status=400)

#         subject = f'New Contact Form Submission from {name}'
#         body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

#         # Before send_mail
#         logger.info("EMAIL_HOST: %s", settings.EMAIL_HOST)
#         logger.info("EMAIL_PORT: %s", settings.EMAIL_PORT)
#         logger.info("EMAIL_HOST_USER: %s", settings.EMAIL_HOST_USER)
#         logger.info("EMAIL_USE_TLS: %s", settings.EMAIL_USE_TLS)
        
#         send_mail(
#             subject,
#             body,
#             settings.DEFAULT_FROM_EMAIL,
#             [ADMIN_EMAIL],
#             fail_silently=False,
#         )

#         print("✅ Email sent")

#         # WhatsApp message (optional)
#         if WHATSAPP_API_KEY:
#             try:
#                 whatsapp_message = f"New message from {name} ({email}): {message}"
#                 send_whatsapp_message(whatsapp_message)
#                 print("📨 WhatsApp sent")
#             except Exception as e:
#                 print("❌ WhatsApp error:", e)

#         return JsonResponse({'success': True, 'message': 'Message sent successfully!'})

#     except Exception as e:
#         print("🔥 Server error:", e)
#         print(traceback.format_exc())  # Show full traceback in logs
#         return JsonResponse({'error': 'Internal Server Error'}, status=500)


# def send_whatsapp_message(message):
#     url = f"https://api.callmebot.com/whatsapp.php?phone={WHATSAPP_PHONE}&text={message}&apikey={WHATSAPP_API_KEY}"
#     requests.get(url)

# def send_whatsapp_message(message):
#     url = (
#         f"https://api.callmebot.com/whatsapp.php"
#         f"?phone={WHATSAPP_PHONE}"
#         f"&text={requests.utils.quote(message)}"
#         f"&apikey={WHATSAPP_API_KEY}"
#     )
#     response = requests.get(url)
#     print("WhatsApp response:", response.text)



import logging
import os
import traceback
import sendgrid
from sendgrid.helpers.mail import Mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

logger = logging.getLogger(__name__)

# Load environment variables
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY", "your-sendgrid-api-key")  # Load from env
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

        # SendGrid Email Sending (No SMTP)
        try:
            sg = sendgrid.SendGridAPIClient(api_key="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")
            mail = Mail(
                from_email=email,
                to_emails=ADMIN_EMAIL,
                subject=subject,
                plain_text_content=body,
            )
            response = sg.send(mail)
            logger.info("✅ Email sent via SendGrid. Status code: %s", response.status_code)
        except Exception as e:
            logger.error(f"❌ SendGrid email sending failed: {str(e)}")
            return JsonResponse({'error': f'Failed to send email: {str(e)}'}, status=500)

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
    url = (
        f"https://api.callmebot.com/whatsapp.php"
        f"?phone={WHATSAPP_PHONE}"
        f"&text={requests.utils.quote(message)}"
        f"&apikey={WHATSAPP_API_KEY}"
    )
    response = requests.get(url)
    print("WhatsApp response:", response.text)

