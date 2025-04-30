
from django.urls import path
from .views import contact_view
from django.http import JsonResponse
from django.http import HttpRequest  

def root_view(request):
    return JsonResponse({"message": "Welcome to the API!"})

urlpatterns = [
    path('contact/', contact_view, name='contact'),
]
