import json

from django.http import HttpResponse
from django.shortcuts import render

from system.models import Book


def a(request):
    # 要让该函数返回一个页面
    return render(request, 'index.html')
    # info = 'nihao'
    # return render(request,'index.html', {'xinxi':info})
    # 定义字典
    # lists={}
    # 给字典赋值
    # lists["a"] = 10
    # lists["b"] = 20
    # return render(request,'index.html',lists)
    # result = request.GET['age']
    # print(result)
    # return HttpResponse('接收参数：'+str(result))


def info(request):
    result1 = Book.objects.all()
    print(result1)
    # return render(request,'index.html')
    x_list = []
    y_list = []
    for item in result1:
        x_list.append(item.bname)
        y_list.append(item.price)
    # 声明字典
    result = {
        'x': x_list,
        'y': y_list,
    }
    return HttpResponse(json.dumps(result), content_type='application/json')


