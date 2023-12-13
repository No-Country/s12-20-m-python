# Django
from django.contrib import admin
# Models 
from .models import Land, Tree, TypeTree

lends =(
    Tree,
    TypeTree,
)
@admin.register(Land)
class Land (admin.ModelAdmin):
    list_display =["place", "ammount"]
    list_display_links = ["place"]
    list_filter = ['place','type_tree']
    list_max_show_all = 100
    search_fields = ['place']
    search_help_text = ' Indique la localidad'

admin.site.register(lends)