from django.urls import path
from . import views
urlpatterns = [
    path('', views.toLoginPage),
    path('toLogin', views.toLoginPage),
    path('toSignup', views.toSignupPage),
    path('login', views.login),
    path('signup', views.signup),
    path('game', views.toGamePage),
    path('create', views.signup),
    path('logout', views.logout),
    path('update_highscore', views.update_highscore),
]