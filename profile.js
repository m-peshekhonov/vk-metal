$(function() {

    var page = $('.page'),
        infoMore = $('.info_link'),
        infoHideContent = $('.userinfo__hide-content'),
        searchLink = $('.search_prf'),
        closeSearchForm = $('.searchblock__item_prf'),
        profileSearch = $('.search-adv_type_profile');

    infoMore.on('click', function(e) {
        e.preventDefault();

        if(infoHideContent.hasClass('userinfo__hide-content_hide')) {
            infoMore.text('Скрыть подробную информацию');
            infoHideContent.removeClass('userinfo__hide-content_hide');
        } else {
            infoMore.text('Показать подробную информацию');
            infoHideContent.addClass('userinfo__hide-content_hide');
        }
    });

    searchLink.on('click', function(e) {
        e.preventDefault();
        
        profileSearch.slideDown(150);
    });

    closeSearchForm.on('click', function() {
        profileSearch.slideUp(150);
    });

});
