# Generated by Django 3.2.16 on 2023-10-25 01:41

import apps.register_business.models
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegisterBusiness',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Nombre del negocio de comida', max_length=200, unique=True)),
                ('description', models.TextField(blank=True, help_text='Una breve descripción del negocio', null=True)),
                ('location', models.CharField(help_text='Dirección del negocio', max_length=255)),
                ('phone_number', models.CharField(help_text='Número de contacto del negocio', max_length=15, unique=True)),
                ('email_business', models.EmailField(help_text='Correo electrónico de contacto del negocio', max_length=254)),
                ('attention_schedule', models.CharField(help_text='Horario de atención del negocio', max_length=100)),
                ('images', models.ImageField(blank=True, help_text='Foto principal del negocio', max_length=500, null=True, upload_to=apps.register_business.models.blog_thumbnail_directory)),
                ('verified', models.BooleanField(default=False)),
                ('registration_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
