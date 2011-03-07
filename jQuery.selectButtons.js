jQuery.fn.selectButtons = function() {
  return this.each(function(selectIndex){
    var select = $(this);
    select.hide();

    var buttonsHtml = '<ul class="select-buttons" id="selectButtons-' + selectIndex + '">';
    select.children('option').each(function(index){
      buttonsHtml += '<li><a href="#" data-select-index="' + (index + 1) + '">' + $(this).html() + '</li></a>';
    });
    buttonsHtml += '</ul>';

    select.after(buttonsHtml);

    var selectButtons = $('#selectButtons-' + selectIndex);
    selectButtons.find('a').click(function(e){
      event.preventDefault();

      selectButtons.find('a').removeClass('picked');
      $(this).addClass('picked');
      select.find('option:nth-child(' + $(this).attr('data-select-index') + ')').attr('selected', 'selected');
    });
  });
};
