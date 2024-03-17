from django import forms
from .models import Comment, Thread, TOPICS

class ThreadForm(forms.ModelForm):
    class Meta:
        model = Thread
        fields = ['title', 'thread_text', 'topic']

    def __init__(self, *args, **kwargs):
        super(ThreadForm, self).__init__(*args, **kwargs)
        self.fields['topic'].widget.attrs.update({'class': 'form-select'})

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)