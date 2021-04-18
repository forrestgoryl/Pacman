from django.db import models
from django.db.models.fields import reverse_related
import bcrypt, re



class Icon(models.Model):
    icon_src = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserManager(models.Manager):
    def validate_signup(self, postData):
        first_name = postData['first_name']
        email = postData['email']
        password = postData['password']
        confirm_password = postData['confirm_password']
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(first_name) > 25:
            errors['name'] = "Your first name is longer than 25 characters. Can you shorten it?"
        if len(first_name) < 2:
            errors['name'] = "Please enter more than one character for your name."
        if not EMAIL_REGEX.match(email):
            errors['email'] = "Your email doesn't fit the pattern 'your_email@abc.com'."
        if User.objects.filter(email=email).exists():
            errors['email'] = "Your email is already registered with another account. Try logging in."
        if len(email) > 25:
            errors['email'] = "Your email is too long for the database."
        if len(password) > 25:
            errors['password'] = "Your password is too long. How can you remember that?"
        if password != confirm_password:
            errors['password'] = "Your password doesn't match your password confirmation."
        return errors
    def validate_login(self, postData):
        errors = {}
        list_user = User.objects.filter(email=postData['email'])
        if len(list_user) > 0:
            if (bcrypt.checkpw(postData['password'].encode(), list_user[0].password.encode())):
                pass
            else:
                errors['password_incorrect'] = "Your password didn't match the one in our system."
                return errors
        else:
            errors['email_not_found'] = "Your email address isn't in the system. Please register it."
        return errors
    def validate_update(self, postData):
        errors = {}
        if len(postData['first_name']) < 2:
            errors['name'] = "Please make your name longer."
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Your email doesn't fit the pattern 'your_email@abc.com'."
        if User.objects.filter(email=postData['email']).exists():
            errors['email'] = "Your email is already in the database."
        return errors

class User(models.Model):
    icon = models.ForeignKey(Icon, on_delete=models.CASCADE)
    email = models.CharField(max_length=25)
    first_name = models.CharField(max_length=25)
    password = models.CharField(max_length=25)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Highscore(models.Model):
    user = models.OneToOneField(User, related_name='highscore', on_delete=models.CASCADE)
    highscore = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
