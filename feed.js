$(function() {

    var page = $('.page'),
        commentForm = $('.comment-form'),
        attachCommentLink = $('.comment-form___attach'),
        attachCommentPopup = $('.popup-wall_type_attach-wall'),
        textareaComment = $('.comment-form__textarea'),
        closeFormComment = $('.comment-form___button-cancel'),
        hideForm = $('.comment-form___button-cancel-2'),
        filterNews = $('.menu__item_type_news'),
        filterNewsPopup = $('.popup-news_filter'),
        moreText = $('.box__text_more_yes'),
        hidetext = $('.box__hide-text'),
        sourceList = $('.userlist_source'),
        sourceLink = $('.source_link'),
        sourcePopup = $('.popup_type_source'),
        searchTumbler = $('.search_tumb'),
        selectTypeSearch = $('.msg-type-select'),
        select = $('.select'),
        newPostAttach = $('.comment-form___attach'),
        newPostTextarea = $('.new-post__textarea'),
        headHeight = $('.header').height(),
        tabsList = $('.tabs-list'),
        tabsPopupLink = $('.tabs-list__icon'),
        tabsPopup = $('.popup-news_newtabs'),
        repliesForm = $('.reply__content_form'),
        repliesFilter = $('.reply_filter'),
        reppliesPopupFilter = $('.popup-news_r-filter');

    setSourceheight();

    select.on('click', function() {
        $(this).toggleClass('select_active');
    });

    //  Открыть попап с фильтрами овтетов
    repliesFilter.on('click', function(e) {
        e.preventDefault();

        reppliesPopupFilter.addClass('popup-msg_show');
    });

    //  Закрыть попап с фильтрами овтетов
    reppliesPopupFilter.on('mouseleave', function() {
        $(this).removeClass('popup-msg_show');
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
        page.addClass('page_noscroll');

        sourcePopup.addClass('popup_show');
    });

    $('.close_source, .paranja').on('click', function() {

        page.removeClass('page_noscroll');

        sourcePopup.removeClass('popup_show');
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

    newPostTextarea.on('mousedown', function() {
        $(this).addClass('new-post__textarea_show');
    });

    $(window).on('resize', function() {
        setSourceheight();
    });

    $(window).on('scroll', function() {

        var windowTop = $(this).scrollTop() + 28,
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

    tabsPopupLink.on('click', function() {
        tabsPopup.toggleClass('popup-msg_show');
    });

    tabsPopup.on('mouseleave', function() {
        $(this).parents('.tabs-list').find('.popup-news_newtabs').removeClass('popup-msg_show');
    });

    $('.more-tabs').on('click', function() {
        $('.popup-wall_type_tabs').toggleClass('popup-msg_show');
    });

    $('.popup-wall_type_tabs').on('mouseleave', function() {
        $(this).parents('.tabs-list').find('.popup-wall_type_tabs').removeClass('popup-msg_show');
    });

    $('.reply__item_open').on('click', function() {
        $('.reply__item_hide').removeClass('reply__item_hide');
    });

    repliesForm.on('click', function() {
        $(this).parents('.reply__item').find('.comment-form_hide').toggle();
    });

    hideForm.on('click', function() {
        $(this).parents('.comment-form_replies').hide();
    });


    function setSourceheight() {
        sourceList.css('height', $(window).height() - 260);
    }
});
