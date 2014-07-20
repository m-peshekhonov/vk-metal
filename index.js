$(function() {

    var windowHeight = $(window).height() - 140; // не нужно на всю высоту экрана


    setHeightContent(windowHeight);

    function setHeightContent(height, force) {
        $('.sidebar__menu').css('height', height);
        $('.m-user') && $('.m-user').css('height', height - 41); // 55 - поле поиска
        $('.user-dialog') && $('.user-dialog').css('height', height - (force ? 60 : 111));
    }

    function destroyPopup() {
        $('.popup-msg_type_all').removeClass('popup-msg_show');
        $('.popup-msg_type_media').removeClass('popup-msg_show');
        $('.popup-msg_type_attach').removeClass('popup-msg_show');
    }

    $('.menu_show').hover(function(e) {
        e.preventDefault();

        $('.popup-msg_type_all').addClass('popup-msg_show');
        $('.popup-msg_type_media').removeClass('popup-msg_show');
    });

    $('.media_show').hover(function(e) {
        e.preventDefault();

        $('.popup-msg_type_media').addClass('popup-msg_show');
        $('.popup-msg_type_all').removeClass('popup-msg_show');
    });

    $('.popup__helper').hover(destroyPopup);

    $('.userform__attach').hover(function() {
        $('.popup-msg_type_attach').addClass('popup-msg_show');
    });


    $(window).resize(function() {
        setHeightContent($(window).height() - 140, $('.page').hasClass('page_hide') ? true : false);
    });

    $('.user-dialog__item').on('click', function() {

        $(this).addClass('user-dialog__item_active');

        $('.userform').addClass('userform_hide');
        $('.editform').removeClass('editform_hide');

        $('.page').addClass('page_hide');

        $('.user-dialog') && $('.user-dialog').css('height', $(window).height() - 200);
    });

    $('.editform__button_light').on('click', function() {

        $('.user-dialog__item').removeClass('user-dialog__item_active');

        $('.userform').removeClass('userform_hide');
        $('.editform').addClass('editform_hide');

        $('.page').removeClass('page_hide');

        setHeightContent($(window).height() - 140);
    });

});
