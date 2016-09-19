$(document).ready(function() {

    $('button').first().on("click", function(){
        $('#modal').css({display: "none"});
    });
    $('#submitMailingList').on("click keypress", function(e){
        if (e.which === 13 || e.type === 'click') {
            $.post('Sprint-Website-Mailing-List.json');
        }
    });

    $('.navigationMenu').height(function(){
        var navigationMenuHeight = ($('#header').outerHeight(true) + $('#container').outerHeight());
        return navigationMenuHeight;
    });
    $("#hamburger").on("click", openNavigationMenu);
    $("#closeNavigation").on("click", closeNavigationMenu);
    $('body').on("click", function(e)
        {if (e.target.id !== "navigationMenuOpen") {
            closeNavigationMenu();
        }
    }, true);

    function openNavigationMenu() {
        $('.navigationMenu').attr('id', 'navigationMenuOpen');
    }

    function closeNavigationMenu() {
        $('.navigationMenu').attr('id', 'navigationMenuClose');
    }
});
