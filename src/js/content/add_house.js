$(function(){

    $(document).on('click', '.select-all', selectAll);
    $(document).on('click', '.unselect-all', unselectAll);

    var inputsCheckbox = $('.email__container').find('input[type=checkbox]');

    function selectAll (e) {
        e.preventDefault();

        inputsCheckbox.prop('checked', true);
    }

    function unselectAll (e) {
        e.preventDefault();

        inputsCheckbox.prop('checked', false);
    }

    if ($(window).width() < 767) {

        $('.link-btn').on('click', showMobileAction);

    }

    function showMobileAction (e) {
        e.preventDefault();

        $('.hidden-sm').slideUp('slow');

        $('.hidden-mobile').slideDown('slow');
    }
});
