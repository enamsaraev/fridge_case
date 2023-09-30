# Generated by Django 4.2.5 on 2023-09-30 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbcore', '0002_remove_calendar_recipe_calendar_recipe'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeRecomendationData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='', verbose_name='Файл')),
            ],
            options={
                'verbose_name': 'Файл с данными рекомендательной системы',
                'verbose_name_plural': 'Файлы с данными рекомендательной системы',
            },
        ),
    ]
