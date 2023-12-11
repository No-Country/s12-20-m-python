# Django
from django.contrib import admin
# Models 
from .models import Land, Tree, TypeTree

lends =(
    Land,
    Tree,
    TypeTree,
)

admin.site.register(lends)