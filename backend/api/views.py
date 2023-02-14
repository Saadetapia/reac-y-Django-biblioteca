from rest_framework.response import Response 
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Blog
from .serializers import BlogSerializer


@api_view(['GET'])
def getBlogs(request):
    blog = Blog.objects.all()
    serializer = BlogSerializer(blog, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postBlog(request):
    data = request.data
    blog = Blog.objects.create(
        body= data['body']
    )
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def putBlog(request, pk):
    data = request.data
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(instance=blog, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog Eliminado')

### agregar usuario
# from .models import FormData
# from django.shortcuts import render, redirect

# def save_form_data(request):
#     if request.method == 'POST':
#         name = request.POST['name']
#         email = request.POST['email']
#         message = request.POST['message']
#         FormData.objects.create(name=name, email=email, message=message)
#         return redirect('success_page')
#     return render(request, 'form.html')