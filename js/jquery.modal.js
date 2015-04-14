/*
 * Simple modal plugin for jQuery
 * USAGE: $('.modal').modal('.modal-trigger');
 */
 
$.fn.modal = function(trigger,options){
    var container = $(this);

    var defaults  = {
       closeClass  : '.modal-close',
       shadowClass : '.modal-shadow',
       closeOnEsc  : true,
       closeShadow : true,
       autoInit    : false,
       onInit      : function(){},
       onShow      : function(){},
       onClose     : function(){}
    };

    // Overwrite default options 
    // with user provided ones 
    // and merge them into "options". 
    //var options = $.extend({}, defaults, options); 
    var settings  = $.extend(defaults, options);

    //trigger callback
    callback(settings['onInit']);

    if(settings['autoInit']){
        container.show();
        callback(settings['onShow'], container);
    }else{
        $('body').on('click', trigger, function(){
            container.show();
            callback(settings['onShow'], container);
            return false;
        });
    }

    if(settings['closeShadow']){
        $('body').on('click', settings['shadowClass'], function(){
            container.hide();
            callback(settings['onClose'], container);
            return false;
        });        
    }

    if(settings['closeOnEsc']){
        $(document).keyup(function(e){
            e.stopPropagation();
            if(e.keyCode === 27){
                container.hide();
                callback(settings['onClose'], container);
                return false;
            }
        });
    }

    $('body').on('click', settings['closeClass'], function(){
        container.hide();
        callback(settings['onClose'], container);
        return false;
    });

    function callback(prop, element){
        if (typeof prop == 'function') {
            prop.call(this, element);
        }
    }
 };

$(function(){
    $('.modal').modal('.modal-trigger');
})
