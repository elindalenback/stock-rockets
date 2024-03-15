from django.contrib import admin
from .models import Thread, Comment
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Thread)
class ThreadAdmin(SummernoteModelAdmin):

    list_display = ('title', 'slug', 'topic', 'created_on')
    search_fields = ['title']
    list_filter = ('topic',)
    prepopulated_fields = {'slug': ('title',)}
    summernote_fields = ('thread_text',)

@admin.register(Comment)
class CommentAdmin(SummernoteModelAdmin):

    list_display = ('author', 'body', 'created_on', 'thread',)
    search_fields = ['body', 'author__username', ]
    summernote_fields = ('thread_text',)


# Register your models here.

