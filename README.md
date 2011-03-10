# Select2Buttons JQuery Plugin

## About

Select2Buttons is a jQuery plugin that provides an alternative to the standard html select. The plugin coverts selects into a series of button like elements, 
and if used correctly can provide a better visual representation of the options available to a user.

![select to buttons example](http://o-sam-o.github.com/images/select2ButtonsExample.png)

This plugin was inspired by [threadless.com](http://www.threadless.com/) and a question by [GreatPotato](http://forrst.com/people/GreatPotato) on Forrst.

## Howto

Add a standard select to the page and then make 1 jQuery call to convert it into buttons:

    <select name="simple-select">
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </select>

    <script>
       $('select[name=simple-select]').select2Buttons();
    </script>

When the user clicks on one of the buttons (their really links), the plugin sets that value in your select so server side your code should be exactly the same.

### Javascript Callbacks
Any change events registered again the original select will also fire when the select buttons are clicked. e.g.

      $('select[name=simple-select]').change(function() {
        alert('Changed to ' + $(this).val());
      });



_More Coming Soon_
