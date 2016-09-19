$(document).ready(function() {

    $('button').first().on("click", function(){
        $('#modal').css({display: "none"});
    });
    $('#submitMailingList').on("click keypress", function(e){
        if (e.which === 13 || e.type === 'click') {
            var firstName = $('#firstName').val()
            var lastName = $('#lastName').val()
            var email = $('#email').val()
            // $.post('Sprint-Website-Mailing-List.json', { FirstName: $('#firstName').val(), LastName: $('#lastName').val(), Email: $('#email').val() })
            //     .done(function(data) {
            //         console.log(data);
            //     });
            $('#mailingListContainer').empty().html("We're sorry " + firstName + " " + lastName + " but the mailing list is still under construction while we learn .POST requests! \ Therefore we will be unable to email you at " + email + ".");
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
