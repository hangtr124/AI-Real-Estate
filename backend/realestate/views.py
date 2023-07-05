from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from joblib import load
import sklearn
import pathlib

# Create your views here.

@ensure_csrf_cookie
def results_by_tts(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            p = int(data['p'])            
            sqft = int(data['sqft'])
            zc = int(data['zc'])
            bdrm = int(data['bdrm'])
            bthrm = int(data['bthrm'])
            hbthrm = int(data['hbthrm'])
            yr = int(data['yr'])
            grg = data['grg']

            feature_list = [[]]
            feature_list[0].append(p)
            feature_list[0].append(sqft)
            feature_list[0].append(zc)
            feature_list[0].append(bdrm)
            feature_list[0].append(bthrm)
            feature_list[0].append(hbthrm)
            feature_list[0].append(yr)
            feature_list[0].append(grg)

            decision_tree = load('model/real-estate-tts-v1.joblib')
            answer = decision_tree.predict(feature_list)

            return HttpResponse(answer)
        except Exception as e:
            return HttpResponse('Err100')
    return HttpResponse('HTTP 200')

@ensure_csrf_cookie
def results_by_price(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            sqft = int(data['sqft'])
            dts = int(data['dts'])
            zc = int(data['zc'])
            bdrm = int(data['bdrm'])
            bthrm = int(data['bthrm'])
            hbthrm = int(data['hbthrm'])
            yr = int(data['yr'])
            grg = data['grg']

            feature_list = [[]]
            feature_list[0].append(sqft)
            feature_list[0].append(dts)
            feature_list[0].append(zc)
            feature_list[0].append(bdrm)
            feature_list[0].append(bthrm)
            feature_list[0].append(hbthrm)
            feature_list[0].append(yr)
            feature_list[0].append(grg)

            decision_tree = load('model/real-estate-rbp-v1.joblib')
            answer = decision_tree.predict(feature_list)

            formatted_prediction = '{:,}'.format(int(answer))

            return HttpResponse(formatted_prediction)
        except Exception as e:
            return HttpResponse('Err100')
    return HttpResponse('HTTP 200')