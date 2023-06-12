"""dataprocess URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from dataprocess import views

urlpatterns = [
    path('', views.DataProcess.deal),
    path('dataprocess_1', views.DataProcess.deal_1),
    path('national_data', views.national_data),
    path('json', views.DataProcess.json),
    path('html', views.DataProcess.html)
]

