from django.db import models
from django.utils.translation import gettext_lazy as _

from datetime import datetime


class Measure(models.Model):
    measure = models.CharField(max_length=255,
                               verbose_name=_('Мера'),)
    
    class Meta:
        verbose_name = 'Мера'
        verbose_name_plural = 'Меры'

    def __str__(self) -> str:
        return self.measure
    

class Product(models.Model):
    name = models.TextField(verbose_name=_('Имя продукта'),)
    allergy = models.BooleanField(default=False, verbose_name=_('Аллергия'),)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self) -> str:
        return self.name


class AllergyProduct(models.Model):
    product = models.ForeignKey('Product',
                                related_name=_('allergy_products'),
                                on_delete=models.SET_NULL,
                                null=True)
    
    class Meta:
        verbose_name = 'Аллергия на продукт'
        verbose_name_plural = 'Аллергии на продукты'

    def __str__(self) -> str:
        return self.product.name


class FridgeProduct(models.Model):
    count = models.FloatField(verbose_name=_('Количество'),)
    measure = models.ForeignKey('Measure', 
                                related_name=_('fridge_products'),
                                on_delete=models.SET_NULL,
                                null=True)
    product = models.ForeignKey('Product',
                                related_name='fridge_products',
                                on_delete=models.SET_NULL,
                                null=True)

    class Meta:
        verbose_name = 'Продукт в холодильнике'
        verbose_name_plural = 'Продукты в холодильнике'

    def __str__(self) -> str:
        return self.product.name
    

class Recipe(models.Model):
    name = models.TextField(verbose_name=_('Рецепт'),)

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

    def __str__(self) -> str:
        return self.name
    

class RecipeProduct(models.Model):
    recipe = models.ForeignKey('Recipe',
                               related_name='recipe_products',
                               on_delete=models.SET_NULL,
                               null=True,
                               verbose_name=_('Рецепт'),)
    product = models.ForeignKey('Product',
                                related_name='recipe_products',
                                on_delete=models.SET_NULL,
                                null=True,
                                verbose_name=_('Продукт'),)
    count = models.FloatField(verbose_name=_('Количество'),)
    measure = models.ForeignKey('Measure', 
                                related_name=_('recipe_products'),
                                on_delete=models.SET_NULL,
                                null=True)
    
    class Meta:
        verbose_name = 'Продукт для рецепта'
        verbose_name_plural = 'Продукты для рецептов'

    def __str__(self) -> str:
        return f'Рецепт: {self.recipe.name} - продукт: {self.product.name}'
    

class Calendar(models.Model):
    date = models.DateField(verbose_name=_('Дата'),)
    recipe = models.ForeignKey('Recipe', related_name='calendars', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Календарь'
        verbose_name_plural = 'Календарь'

    def __str__(self) -> str:
        return self.date.strftime('%m/%d/%Y')
    

class RecipeRecomendationData(models.Model):
    file = models.FileField(verbose_name=_('Файл'),)

    class Meta:
        verbose_name = 'Файл с данными рекомендательной системы'
        verbose_name_plural = 'Файлы с данными рекомендательной системы'

    def __str__(self) -> str:
        return f'{self.id}'