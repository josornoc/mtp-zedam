$(function () {
    var headerMenu = (function (){

        return {
            'slideSubmenuOpen': slideSubmenuOpen,
            'slideSubmenuClose': slideSubmenuClose,
            'preventClosing': preventClosing,
            'toggleMenu': toggleMenu
        };

        /* User Menu */
        function slideSubmenuOpen (e) {
            e.preventDefault();
            e.stopPropagation();

            $('.js-submenu').removeClass('hover');
            $(this).addClass('hover');

            $('.js-submenu').not(this).parent().find('.js-submenu-container').slideUp('fast');
            $(this).parent().find('.js-submenu-container').slideToggle('fast');
        }

        function slideSubmenuClose () {
            $('.js-submenu').removeClass('hover');
            $('.js-submenu-container').fadeOut('fast');
        }

        function preventClosing (e) {
            e.stopPropagation();
        }

        function toggleMenu(e) {
            e.preventDefault();
            $('body').toggleClass('open-menu');
        }
    })();

    var slideSubMenu = $('.js-submenu');
    var slideSubMenuContainer = $('.js-submenu-container');

    // Opens the subMenu on clicking
    slideSubMenu.on('click', headerMenu.slideSubmenuOpen);

    // Prevents the closing of the submenu
    slideSubMenuContainer.on('click', headerMenu.preventClosing);

    // Closes the submenu when clicking the body
    $('body').on('click', headerMenu.slideSubmenuClose);


    $('.burger').on('click', headerMenu.toggleMenu);
});
