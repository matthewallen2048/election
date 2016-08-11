(function ($) {
    'use strict';
    $(function () {
        $(".button-collapse").sideNav();
        $('.modal-trigger').leanModal({
            dismissible: true,
            opacity: 0.5,
            in_duration: 300,
            out_duration: 200
        });
    
        $('.parallax').parallax();
    });// end of document ready
})(jQuery); // end of jQuery name space