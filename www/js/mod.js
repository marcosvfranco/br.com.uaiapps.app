
$(function () {
    $(".selector").toolbar("destroy");
    $("[data-role='header'], [data-role='footer']").toolbar({theme: "b"});
    $(".selector").toolbar("refresh");
});

$(document).on("pagecontainerchange", function () {
    var current = $(".ui-page-active").jqmData("title");
        // Change the heading
        $("[data-role='header'] h1").text(current);

    //$("[data-role='footer'] div").addClass("ui-fixed-hidden");
        // Remove active class from nav buttons
        $("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
        // Add active class to current nav button
        $("[data-role='navbar'] a").each(function () {
                if ($(this).text() === current) {
                        $(this).addClass("ui-btn-active");
                }
        });


});



var flag = false;

$(document).on("click", "#menu-B", function () {
    if (!flag) {
        flag = true;


        //$("<div data-role='navbar' data-id='menuFooter'><ul><li><a href='pizzas.html' data-role='button' data-icon='pizza' data-iconpos='top'>Pizzas</a></li><li><a href='bebidas.html'  data-role='button' data-icon='drink' data-iconpos='top'>Bebidas</a></li><li><a href='porcoes.html' data-role='button' data-icon='food' data-iconpos='top'>Porções</a></li></ul></div>")
        //  .appendTo(".ui-footer");


        //Updating header with button
//        $(".ui-header").toolbar({
//            addBackBtn: true
//        });
//        $(".ui-header").toolbar({
//            backBtnText: "Voltar"
//        });
//        $(".ui-header").toolbar({
//            backBtnTheme: "b"
//        });

        $("div h1").replaceWith("<a href='index.html' data-icon='back' class='ui-btn-left'>Voltar</a><h1>Menu</h1>");
        
        //Updating footer with navbars
        $("div h4").replaceWith("<div data-role='navbar' data-id='menuFooter'><ul><li><a href='pizzas.html' data-role='button' data-icon='pizza' data-iconpos='top'>Pizzas</a></li><li><a href='bebidas.html'  data-role='button' data-icon='drink' data-iconpos='top'>Bebidas</a></li><li><a href='porcoes.html' data-role='button' data-icon='food' data-iconpos='top'>Porções</a></li></ul></div>");
            // Update the page height and padding
            $.mobile.resetActivePageHeight();
    }
});



