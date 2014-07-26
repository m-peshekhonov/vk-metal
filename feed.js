$(function() {

    var commentForm = $('.comment-form'),
        attachCommentLink = $('.comment-form___attach'),
        attachCommentPopup = $('.popup-wall_type_attach-wall'),
        textareaComment = $('.comment-form__textarea'),
        closeFormComment = $('.comment-form___button-cancel'),
        filterNews = $('.menu__item_type_news'),
        filterNewsPopup = $('.popup-news_filter'),
        moreText = $('.box__text_more_yes'),
        hidetext = $('.box__hide-text'),
        sourceList = $('.userlist_source'),
        sourceLink = $('.source_link'),
        sourcePopup = $('.popup_type_source'),
        headerLogo = $('.header__wrapper-menu-open'),
        searchTumbler = $('.search_tumb'),
        selectTypeSearch = $('.msg-type-select'),
        select = $('.select'),
        newPostAttach = $('.comment-form___attach'),
        newPostTextarea = $('.new-post__textarea'),
        headHeight = $('.header').height(),
        tabsList = $('.tabs-list');

    setSourceheight();

    select.on('click', function() {
        $(this).toggleClass('select_active');
    });

    //  Открыть попап с аттач-ссылками
    attachCommentLink.on('mouseover', function() {
        $(this).parents('.comment-form').find('.popup-msg').addClass('popup-msg_show');
    });

    //  Закрыть попап с аттач-ссылками
    attachCommentPopup.on('mouseleave', function() {
        $(this).removeClass('popup-msg_show');
    });

    //  Открыть блок с комментарием
    textareaComment.on('focus', function() {
        $(this).parents('.comment-form').addClass('comment-form_open');
    });

    //  Закрыть блок с комментарием
    closeFormComment.on('click', function() {
        $(this).parents('.comment-form').removeClass('comment-form_open');
        attachCommentPopup.removeClass('popup-msg_show');
    });

    //  Открыть попап с фильтрами новостей
    filterNews.on('click', function() {
        filterNewsPopup.addClass('popup-msg_show');
    });

    //  Закрыть попап с фильтрами новостей
    filterNewsPopup.on('mouseleave', function() {
        $(this).removeClass('popup-msg_show');
    });

    // Показать больше текста в записях блога
    moreText.on('click', function() {
        $(this).find('.box__show-more').remove();
        hidetext.addClass('box__hide-text_show');
    });

    sourceLink.on('click', function(e) {
        e.preventDefault();
        sourcePopup.addClass('popup_show');
    });

    $('.close_source, .paranja').on('click', function() {
        sourcePopup.removeClass('popup_show');
    });

    headerLogo.on('mouseover', function() {
        $('.tumbler__counter').hide(200);
    });

    searchTumbler.on('click', function() {
        $('.search-adv').slideDown(300);
    });

    selectTypeSearch.on('click', function() {
        $('.popup-msg_type').toggleClass('popup-msg_show');
    });

    $('.popup-msg_type').on('mouseleave', function() {
        $(this).removeClass('popup-msg_show');
    });

    newPostAttach.on('mouseover', function() {
        $(this).parents('.new-post').find('.popup-msg').addClass('popup-msg_show');
    });

    newPostTextarea.on('click', function() {
        $(this).addClass('new-post__textarea_show');
    });

    $(window).on('resize', function() {
        setSourceheight();
    });

    $(window).on('scroll', function() {

        var windowTop = $(this).scrollTop() + 30,
            fixTop = headHeight + $('.new-post').height();

        if(windowTop > fixTop) {
            tabsList.addClass('tabs-list_fixed');
        } else {
            tabsList.hasClass('tabs-list_fixed') &&
                    tabsList.removeClass('tabs-list_fixed');
        }
    });

    $('.comment-form___settings').on('click', function() {
        $(this).toggleClass('comment-form___settings_active');
        $('.new-post__sub-controls').toggleClass('new-post__sub-controls_show');
    });

    function setSourceheight() {
        sourceList.css('height', $(window).height() - 260);
    }
});
