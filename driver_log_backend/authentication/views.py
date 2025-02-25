from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def register_user(request):
    try:
        email = request.data.get('email')
        password = request.data.get('password')
        name = request.data.get('name')
        
        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Bu email adresi zaten kayıtlı!'}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=name.split()[0],
            last_name=name.split()[-1] if len(name.split()) > 1 else ''
        )

        refresh = RefreshToken.for_user(user)
        
        return Response({
            'status': 'success',
            'message': 'Kullanıcı başarıyla oluşturuldu',
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },
            'user': {
                'email': user.email,
                'name': user.get_full_name(),
            }
        })

    except Exception as e:
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['POST'])
def login_user(request):
    try:
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(username=email, password=password)
        
        if user is None:
            return Response(
                {'error': 'Geçersiz email veya şifre!'}, 
                status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            'status': 'success',
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            },
            'user': {
                'email': user.email,
                'name': user.get_full_name(),
            }
        })

    except Exception as e:
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_400_BAD_REQUEST
        )