
jQuery(function($){
   $('.kc-menu-toggle, .kc-main-nav-overlay').click(function(){
       $('body').toggleClass('kc-main-nav-open');
   });
});

jQuery(function($){
    $('.kc-main-nav li a').click(function(){
        $('.kc-main-nav li a').removeClass('kc-menu-active');
        $(this).addClass('kc-menu-active');
    });
});

equalheight = function(container){

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function() {
    equalheight('.kc-footer .ba-grid .ba-width-medium-3-12');
});


$(window).resize(function(){
    equalheight('.kc-footer .ba-grid .ba-width-medium-3-12');
});
