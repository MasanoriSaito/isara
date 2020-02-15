$(function () {
    'use strict';

    /*--------------*/
    /*--Back to Top--*/
    /*-------------*/

    // ボタン消す
    $('#back_to_top').hide();

    // スクロールしたらボタン現れる
    // 上に戻ったらボタン消える
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
    });

    // ボタン押されたら
    $('#back_to_top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.startpoint').click(function () {
        var contactPadding = 40;
        var targetTop = $('#contactform').offset().top;
        $('html,body').animate({
            scrollTop: targetTop - contactPadding
        }, 500);
        return false;
    });


    //////////////////////
    ////  question, flow ///
    ///////////////////////
    $('.q_item__content').hide();
    $('.up').hide();

    $('.q_item__logo').click(function () {
        $(this).next().slideToggle(200);
        $(this).find('.fa-angle-down').toggle();
        $(this).find('.up').toggle();
    });
});