# Select2Buttons JQuery Plugin

## About

Select2Buttons is a jQuery plugin that provides an alternative to the standard html select. The plugin converts selects into a series of button like elements, 
and if used correctly can provide a better visual representation of the options available to a user.

[![select to buttons example](http://o-sam-o.github.com/images/select2ButtonsExample.png)](http://o-sam-o.github.com/select2Buttons/)


[DEMO AVAILABLE HERE](http://o-sam-o.github.com/select2Buttons/)

This plugin was inspired by [threadless.com](http://www.threadless.com/) and a question by [GreatPotato](http://forrst.com/people/GreatPotato) on Forrst.

### Features

* Converts normal HTML selects into button like elements (a tags)
* Supports JS change callbacks
* Supports disabled options
* Supports disabled selects
* Supports OptGroups
* Allows no default selection (like threadless)

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
Any change events registered against the original select will also fire when the select buttons are clicked. e.g.

      $('select[name=simple-select]').change(function() {
        alert('Changed to ' + $(this).val());
      });

### No Default Selection
By default the option selected in your select will be marked as selected
in the buttons.  However, the plugin also supports the threadless style,
no default selection.

       $('select[name=simple-select]').select2Buttons({noDefault: true});

### OptGroups
The plugin understands and honors option groups.  Each option group will
be placed in a seperate UL and the optgroups label will be added to the
page as a strong tag.

### Disabling
The plugin supports disabled options and disabled selects. [See the demo
for examples.](http://o-sam-o.github.com/select2Buttons/)

### Styling
The select2Buttons.css is provided as a guide, it's mostly copied from
threadless.com.  I suggest restyling if your going to use the plugin on a
commercial site.

## Licencing

MIT

## Contact

Sam Cavenagh [(cavenaghweb@hotmail.com)](mailto:cavenaghweb@hotmail.com)
