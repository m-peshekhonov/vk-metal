$(function() {
    
    /*  Код для демонстрации функциональности некоторых блоков */

    var windowHeight = $(window).height() - 140, // не нужно на всю высоту экрана
        headerLogo = $('.header__wrapper-menu-open');

    setHeightContent(windowHeight);

    function setHeightContent(height, force) {
        $('.sidebar__menu').css('height', height);
        $('.m-user') && $('.m-user').css('height', height - 41); // 55 - поле поиска
        $('.user-dialog') && $('.user-dialog').css('height', height - (force ? 60 : 111));

        $('.popup_type_forward-msg').css('height', height);
        $('.userlist_forward').css('height', height - 60);
    }

    function destroyPopup() {
        $('.popup-msg_type_all').removeClass('popup-msg_show');
        $('.popup-msg_type_media').removeClass('popup-msg_show');
        $('.popup-msg_type_attach').removeClass('popup-msg_show');
    }

    $('.menu_show').on('click', function(e) {
        e.preventDefault();

        $('.popup-msg_type_all').addClass('popup-msg_show');
        $('.popup-msg_type_media').removeClass('popup-msg_show');
    });

    $('.media_show').on('click', function(e) {
        e.preventDefault();

        $('.popup-msg_type_media').addClass('popup-msg_show');
        $('.popup-msg_type_all').removeClass('popup-msg_show');
    });

    $('.settings_open').on('click', function(e) {
         e.preventDefault();

        $('.popup-msg_settings').addClass('popup-msg_show');
    });

    $('.popup-msg_settings').mouseleave(function() {

        $(this).removeClass('popup-msg_show');
    });

    headerLogo.on('mouseover', function() {
        $('.tumbler__counter').hide(200);
    });

    $('.popup__helper, .search_msg').hover(destroyPopup);

    $('.popup-msg_date').mouseleave(function() {
        $(this).removeClass('popup-msg_show');
    });

    $('.userform__attach').on('mouseover', function() {
        $('.popup-msg_type_attach').addClass('popup-msg_show');
    });


    $(window).resize(function() {
        var windowHeight = $(window).height() - 140,
            isHide = $('.page').hasClass('page_hide');

        setHeightContent(windowHeight, isHide ? true : false);
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

    $('.forward-button').on('click', function() {
        $('.popup_type_forward-msg').addClass('popup_show');
    });

    $('.paranja, .close_popup-button').on('click', function() {
        $('.popup_type_forward-msg').removeClass('popup_show');
        $('.popup_type_create-dialog').removeClass('popup_show');
    });

    $('.create-dialog').on('click', function() {
        $('.popup_type_create-dialog').addClass('popup_show');
    });

    $('.popup .userlist__item').on('click', function() {
        $(this).toggleClass('userlist__item_active');
    });

    $('.search_msg').on('click', function(e) {
        e.preventDefault();

        $('.searchblock').addClass('searchblock_show');
        $('.user-dialog__item').eq(0).animate({
            'marginTop': '52px'
        }, 200);
    });

    $('.searchblock__close-button').on('click', function() {
        $('.searchblock').removeClass('searchblock_show');
        $('.user-dialog__item').eq(0).animate({
            'marginTop': '0'
        }, 200);
    });

    $('.searchblock__select').on('click', function() {
        $(this).toggleClass('searchblock__select_active');
        $('.popup-msg_date').toggleClass('popup-msg_show');
    });

});
