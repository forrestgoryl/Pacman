from django.shortcuts import render, redirect
from pacman_app.models import User, Icon, Highscore
from django.contrib import messages
from django.http import JsonResponse
import bcrypt

def toSignupPage(request):
    request.session.flush()
    context = {
        "icon_list": Icon.objects.all()
    }
    return render(request, "signup.html", context)

def toLoginPage(request):
    request.session.flush()
    # json_serializer = serializers.get_serializer("json")()
    # users_json = json_serializer.serialize(User.objects.all().order_by('id')[:5], ensure_ascii=False
    context = {
        'highscores': Highscore.objects.all(),
        'users': User.objects.all(),
    }
    for user in User.objects.all():
        context[f'{user.first_name}'] = {'highscore': user.highscore.highscore, 'icon': user.icon.icon_src}
        context[f'{user.first_name}highscore'] = user.highscore.highscore
        context[f'{user.first_name}icon'] = user.icon.icon_src
    return render(request, "login.html", context)

def toGamePage(request):
    return render(request, "game.html")

def signup(request):
    if request.method == "POST":
        errors = User.objects.validate_signup(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                    messages.error(request, value)
            return redirect("/toSignup")
        else:
            email = request.POST['email']
            first_name = request.POST['first_name']
            password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
            icon = request.POST['icon']
            icon_object = Icon.objects.get(icon_src=icon)
            user = User.objects.create(
                first_name=first_name,
                email=email,
                password=password,
                icon=icon_object
            )
            Highscore.objects.create(
                user = user,
                highscore = 0,
            )
            request.session['email'] = email
            request.session['highscore'] = User.objects.get(email=email).highscore.highscore
            return redirect("/game")

def login(request):
    if request.method == "POST":
        errors = User.objects.validate_login(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        else:
            user = User.objects.get(email=request.POST['email'])
            highscore = Highscore.objects.get(user=user)
            request.session['email'] = request.POST['email']
            request.session['highscore'] = highscore.highscore
            return redirect("/game")

def logout(request):
    if request.method == "POST":
        request.session.flush()
        return redirect("/")


def update_highscore(request):
    highscore = request.session['highscore']
    score = request.GET.get('score', None)
    if score > highscore:
        request.session['highscore'] = score
        user = User.objects.get(email=request.session['email'])
        user.highscore.highscore = score
        user.save()