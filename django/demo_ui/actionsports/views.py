from django.shortcuts import render
from django.views import generic

from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from django.urls import reverse_lazy

# Create your views here.

def index(request):
    return render(request, 'index.html')

def action_live(request):
    return render(request, 'action_live.html')

def fan_page(request):
    return render(request, 'fan_page.html')

def fan_page_detail(request):
    return render(request, 'fan_page/detail.html')

def introduce(request):
    return render(request, 'introduce.html')