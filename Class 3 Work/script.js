$(document).ready(function () {
    $(".modeBtn").click (function () {
        $('body').toggleClass ("blackColor")
    });
    $(".read_More_one").click(function () {
        $(".p_one").slideToggle()
    });
        $(".read_More_two").click(function () {
        $(".p_two").slideToggle()
    });
        $(".read_More_three").click(function () {
        $(".p_three").slideToggle()
    });
        $(".read_More_four").click(function () {
        $(".p_four").slideToggle()
    });
$(".animate_btn").click(function () {
    $(".box")
        $(".animate_btn").click(function () {
    $(".box")
        .animate({ left: "1200px" }, 1000, function () {
            $(this).css("background-color", "red");
        })
        .animate({ top: "250px" }, 1000, function () {
            $(this).css("background-color", "blue");
        })
        .animate({ left: "0px" }, 1000, function () {
            $(this).css("background-color", "green");
        })
        .animate({ top: "0px" }, 1000, function () {
            $(this).css("background-color", "yellow");
        });

});
});
})