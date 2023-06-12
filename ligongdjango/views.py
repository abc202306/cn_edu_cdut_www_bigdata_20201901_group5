# import json

# from django.http import HttpResponse
from django.shortcuts import render  # HttpResponse


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def data(request):
    return render(request, 'data.html')


def receive(request):
    return render(request, 'receive.html')


def risk(request):
    return render(request, 'risk.html')
