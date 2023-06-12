from django.urls import path

from system import views

urlpatterns = [
    path('a/', views.a),
    path('info/', views.info),
]
