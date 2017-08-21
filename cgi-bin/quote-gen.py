#!/usr/bin/env python
import cgi, cgitb
import json
import random

cgitb.enable()

print "Content-Type: text/plain;charset=utf-8\n"

def choose_quote():
	quotes = json.load(open("quotes.json", "r"))["quotes"]
	return random.choice(quotes)

def generate_html(quote):
	return unicode("""<div class="panelquote">&ldquo;{}&rdquo;</div><span class="quoteauthor">&mdash;{}</span><br>""").format(quote[0], quote[1])

print generate_html(choose_quote()).encode("utf-8")