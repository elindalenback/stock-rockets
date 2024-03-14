from django.db import models
from django.contrib.auth.models import User

TOPICS = (
    (0, "News"),
    (1, "Strategies"),
    (2, "Analysis"),
    (3, "Economic"),
    (4, "Crypto"),
    (5, "Finance"),
    (6, "Education"),
)

# Create your models here.

# The model to create a new discussion thread
class Thread(models.Model):
    thread_id = models.AutoField(primary_key=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="thread_post"
    )
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    topic = models.IntegerField(choices=TOPICS, default=0)
    thread_text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return f"{self.title} | posted by {self.author}"


# The model to comment in a discussion thread
class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    thread = models.ForeignKey(
        Thread, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="commenter")
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return f"{self.body} | commented by {self.author}"
