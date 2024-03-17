from . import views
from django.urls import path

urlpatterns = [
    path('', views.ThreadList.as_view(), name='home'),
    path('thread', views.create_thread, name='thread'),
    path('<slug:slug>', views.thread_detail, name='thread_detail'),
]