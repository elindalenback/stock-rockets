from django.urls import path
from . import views

urlpatterns = [
    path('', views.ThreadList.as_view(), name='home'),
    path('thread', views.create_thread, name='thread'),
    path('<slug:slug>', views.thread_detail, name='thread_detail'),
    path('<slug:slug>/edit_comment/<int:comment_id>', views.comment_edit, name='comment_edit'),
    path('<slug:slug>/delete_comment/<int:comment_id>',
         views.comment_delete, name='comment_delete'),
]