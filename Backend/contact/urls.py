
from django.urls import path
from .views import contact_view

urlpatterns = [def root_view(request):
    return JsonResponse({"message": "Welcome to the API!"})

urlpatterns = [
    path('', root_view, name='root'),  # Add a route for /
    path('contact/', contact_view, name='contact'),
]
