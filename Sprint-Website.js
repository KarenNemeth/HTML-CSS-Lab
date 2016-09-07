(function() {
    /*To have a good height on navigationMenu
    var heightHeaderAndIntro = document.getElementById("header").height + document.getElementById("intro").height;
    document.getElementsByClass("navigationMenu").height = heightHeaderAndIntro;*/

    var hamburger = document.getElementById("hamburger");
    var navigationMenu = document.getElementsByClassName("navigationMenu");
    var closeNavigation = document.getElementsByClassName("closeNavigation");

    hamburger.addEventListener("click", openNavigationMenu);
    closeNavigation[0].addEventListener("click", closeNavigationMenu);
    document.body.addEventListener("click", function(e)
        {if (e.target.id !== "navigationMenuOpen") {
            closeNavigationMenu();
        }
    }, true);

    function openNavigationMenu() {
        navigationMenu[0].id = "navigationMenuOpen";
    }

    function closeNavigationMenu() {
        navigationMenu[0].id = "navigationMenuClose";
    }
})();
