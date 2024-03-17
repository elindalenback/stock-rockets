from django.shortcuts import render, get_object_or_404
from django.views import generic
from .models import Thread, TOPICS
from .forms import CommentForm

# Create your views here.
class ThreadList(generic.ListView):
    queryset = Thread.objects.all()
    template_name = "forum/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = TOPICS # Pass the list of topics to the template context
        return context


# Inspired by Code Institute "I Think Therefore I Blog" and modified for this project
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
    comments = thread.comments.all().order_by("-created_on")
    comment_count = thread.comments.count()
    if request.method == "POST":
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.author = request.user
            comment.thread = thread
            comment.save()

    comment_form = CommentForm()

    return render(
        request,
        "forum/thread_detail.html",
        {
            "thread": thread,
            "comments": comments,
            "comment_count": comment_count,
            "comment_form": comment_form,
        },
    )

    return render(
        request,
        "forum/thread_detail.html",
        {"thread": thread},
    )
