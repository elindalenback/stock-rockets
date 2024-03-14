from django.contrib import admin
from .models import Thread, Comment
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Thread)
class ThreadAdmin(SummernoteModelAdmin):

    list_display = ('title', 'slug', 'thread_text', 'topic')
    search_fields = ['title']
    list_filter = ('topic',)
    prepopulated_fields = {'slug': ('title',)}
    summernote_fields = ('thread_text',)


# Register your models here.
admin.site.register(Comment)
