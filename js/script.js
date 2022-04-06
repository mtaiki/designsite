$(document).ready(function() {

    let fvheight = $(".fv").outerHeight();
    let kvheight = $(".kv-wrapper").outerHeight();

    // ハンバーガーメーニュー
    $(".burger-btn").click(function() {
        $(this).toggleClass("active");
        $(".header-nav").toggleClass("active");
        $(".burger-musk").toggleClass("active");

        if($(this).hasClass("active")) {
            $(".burger-musk").fadeIn(250);
        } else {
            $(".burger-musk").fadeOut(250);
        };

        if($(window).scrollTop() > fvheight - 50 ) {
            $(".burger-btn").toggleClass("btn-black");
        };
    });

    // スクロールしたら色を変える
    $(window).scroll(function() {
        if( $(window).scrollTop() < kvheight - 50 ) {
            $(".site-title").removeClass("color-black");
        } else {
            $(".site-title").addClass("color-black");
        };

        if( $(window).scrollTop() < fvheight - 50 ) {
            $(".burger-btn").removeClass("btn-black");
        } else {
            $(".burger-btn").addClass("btn-black");
        };
    });
});