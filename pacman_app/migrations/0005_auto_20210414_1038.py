# Generated by Django 3.1.6 on 2021-04-14 02:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pacman_app', '0004_auto_20210413_1222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highscore',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='highscore', to='pacman_app.user'),
        ),
    ]
