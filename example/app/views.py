#!/usr/bin/env python

from django.shortcuts import render_to_response
from app.forms import ExampleForm
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def home(req):
    form = ExampleForm(req.POST)
    if req.POST and form.is_valid():
        print form.cleaned_data

    return render_to_response(
        "index.html", {
            "form": form
        }
    )
