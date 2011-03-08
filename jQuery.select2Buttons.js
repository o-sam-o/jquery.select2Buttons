jQuery.fn.select2Buttons = function() {
  return this.each(function(selectIndex){
    var select = $(this);
    select.hide();

    var buttonsHtml = '<ul class="select-buttons" id="selectButtons-' + selectIndex + '">';
    select.children('option').each(function(index){
      if ($(this).attr('disabled') || select.attr('disabled')){
        buttonsHtml += '<li class="disabled"><span>' + $(this).html() + '</span></li>';
      }else{
        buttonsHtml += '<li><a href="#" data-select-index="' + (index + 1) + '">' + $(this).html() + '</a></li>';
      }
    });
    buttonsHtml += '</ul>';
    select.after(buttonsHtml);

    var selectButtons = $('#selectButtons-' + selectIndex);
    // Mark current selection as "picked"
    selectButtons.find('li:nth-child(' + (select.attr("selectedIndex") + 1) + ')').find('a, span').addClass('picked');

    selectButtons.find('a').click(function(e){
      event.preventDefault();

      selectButtons.find('a').removeClass('picked');
      $(this).addClass('picked');
      select.find('option:nth-child(' + $(this).attr('data-select-index') + ')').attr('selected', 'selected');
      select.trigger('change');
    });
  });
};
