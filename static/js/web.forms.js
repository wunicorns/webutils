(function($){


    $.fn.extend({
        formValue:function(opt){
              var data = $.extend({}, opt);
              $(this).find('input,textarea,select').each(function(i, elem){
                  var value = $(elem).val();
  
                  if (!!elem.name) {
                      data[elem.name] = value;
                  }
  
              });return data;
          }
      });
  


})(jQuery);
