from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class CustomPermissions(IsAuthenticated):
    permission_classes = (IsAuthenticated,)
    pass

class CustomAuthentication(TokenAuthentication):
    authentication_class = (TokenAuthentication,)
    pass

# Manera de importar

# from .utils import CustomPermissions, CustomAuthentication
# permission_classes = (CustomPermissions,)
# authentication_classes = (CustomAuthentication,)