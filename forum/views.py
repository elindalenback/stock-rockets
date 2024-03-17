from django.shortcuts import render, get_object_or_404, redirect
from django.views import generic
from .models import Thread, TOPICS
from .forms import CommentForm, ThreadForm
from django.contrib.auth.decorators import login_required

# Create your views here.
class ThreadList(generic.ListView):
    template_name = "forum/index.html"

    def get_queryset(self):
        topic_id = self.request.GET.get('topic', None)
        if topic_id is not None and topic_id != "":
            queryset = Thread.objects.filter(topic=topic_id)
        else:
            queryset = Thread.objects.all()
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['topics'] = TOPICS
        context['thread_form'] = ThreadForm()
        print(TOPICS)
        return context

@login_required
def create_thread(request):
    if request.method == "POST":
        thread_form = ThreadForm(data=request.POST)
        if thread_form.is_valid():
            thread = thread_form.save(commit=False)
            thread.author = request.user
            thread.save()
            return redirect('thread_detail', slug=thread.slug)

    else:  # For GET requests or invalid POST data
        thread_form = ThreadForm()

    return render(
        request,
        "forum/index.html",
        {
            'thread_form': thread_form,
        },
    )

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
