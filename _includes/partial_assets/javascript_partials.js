{% comment %}
 this partial is to automate adding partials to a page using its data_file
{% endcomment %}
{% for js in site.data[page.data_file].javascript_partials %}
  {% include {{js}} %}
{% endfor %}
