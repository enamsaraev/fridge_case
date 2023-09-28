from django.shortcuts import render
from django.views import View

from dbcore.models import Recipe, AllergyProduct


class MainPageView(View):
    def get(self, request, *args, **kwargs):
        recipe = Recipe.objects.exclude(recipe_products__product__id__in=[obj.product.id for obj in AllergyProduct.objects.all()])
        print(recipe)
        return render(request, 'index.html')