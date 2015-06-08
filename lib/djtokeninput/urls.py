#!/usr/bin/env python

from django.conf.urls import patterns, url, include


urlpatterns = patterns("",
  url(r"^(?P<app_label>\w+)/(?P<model>\w+)/(?P<search_method>\w+)$", "djtokeninput.views.search", name="djtokeninput_search")
)
