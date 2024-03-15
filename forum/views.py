from django.shortcuts import render, get_object_or_404
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


# Inspired by Code Institute "I Think Therefore I Blog" an modified for this project
def thread_detail(request, slug):
    """
    Display an individual :model:`forum.Thread`.

    **Context**

    ``thread``
        An instance of :model:`forum.Thread`.

    **Template:**

    :template:`forum/thread_detail.html`
    """

    queryset = Thread.objects.all()
    thread = get_object_or_404(queryset, slug=slug)

    return render(
        request,
        "forum/thread_detail.html",
        {"thread": thread},
    )