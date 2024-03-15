from django.shortcuts import render
from django.views import generic
from .models import Thread, TOPICS

# Create your views here.
class ThreadList(generic.ListView):
    queryset = Thread.objects.all()
    template_name = "forum/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = TOPICS # Pass the list of topics to the template context
        return context