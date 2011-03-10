jQuery.fn.select2Buttons = function(options) {
  return this.each(function(){
    var select = $(this);
    select.hide();

    var buttonsHtml = $('<div class="select2Buttons"></div>');

    var addOptGroup = function(optGroupIndex, optGroup){
      if (optGroup.attr('label')){
        buttonsHtml.append('<strong>' + optGroup.attr('label') + '</strong>');
      }
      ulHtml =  $('<ul class="select-buttons">');
      optGroup.children('option').each(function(index){
        liHtml = $('<li></li>');
        if ($(this).attr('disabled') || select.attr('disabled')){
          liHtml.addClass('disabled');
          liHtml.append('<span>' + $(this).html() + '</span>');
        }else{
          liHtml.append('<a href="#" data-select-index="' + (index + 1) + '">' + $(this).html() + '</a>');
        }

        // Mark current selection as "picked"
        if((!options || !options.noDefault) && select.attr("selectedIndex") == (optGroupIndex + index)){
          liHtml.children('a, span').addClass('picked');
        }
        ulHtml.append(liHtml);
      });
      buttonsHtml.append(ulHtml);
    }

    var optGroups = select.children('optgroup');
    if (optGroups.length == 0) {
      addOptGroup(0, select);
    }else{
      optGroups.each(function(index){
        addOptGroup(index, $(this));
      });
    }

    select.after(buttonsHtml);

    buttonsHtml.find('a').click(function(e){
      event.preventDefault();

      buttonsHtml.find('a').removeClass('picked');
      $(this).addClass('picked');
      select.find('option:nth-child(' + $(this).attr('data-select-index') + ')').attr('selected', 'selected');
      select.trigger('change');
    });
  });
};
