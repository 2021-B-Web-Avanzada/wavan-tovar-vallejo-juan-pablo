# Generated by Django 4.0.1 on 2022-01-27 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('apellido', models.CharField(max_length=255)),
                ('cedula', models.CharField(max_length=10)),
                ('tipo_Usuario', models.CharField(max_length=255)),
                ('correo', models.CharField(max_length=255)),
                ('constraseña', models.CharField(max_length=255)),
                ('foto', models.CharField(max_length=255)),
            ],
        ),
    ]
