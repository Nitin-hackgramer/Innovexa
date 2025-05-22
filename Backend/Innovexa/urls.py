from django.contrib import admin
from django.urls import path, include
from .views import contact_view
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact', contact_view, name="contact_view"), 
]

