Webtek-Prosjekt
==============


CSS
---
We are using a single CSS file to style all the pages. Classes and selectors are used to give the page a consistent design


XML
---
XML are used to store data for the FAQ. We are then using javascript to retreive data from the XML document.


Validation of schema
--------------------
The XML-schemas are validated against a DTD. The rules set by the DTD is very simple. <faq> is the root element. It contains an <item>. An <item> containts either a <question> or a <answer>. These two are both "#PCDATA" (parse-able text data). The DTD can be found in the top of our xml-data file.


Javascript
----------
Javascript used clientside. It is used for the slideshow, presenting cars for rental. It is also used for the map, there is controlls the interface and communicates with the google API. We are also using Javascript to read data from XML and insert it into a HTML document.


Serverside
----------
There is no server side code for this project.