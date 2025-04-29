
from django.urls import path
from .views import contact_view

urlpatterns = [def root_view(request):
    return JsonResponse({"message": "Welcome to the API!"})

urlpatterns = [
    path('', contact_view, name='contact'),  # Add a route for /
    path('', contact_view, name='contact'),
]
