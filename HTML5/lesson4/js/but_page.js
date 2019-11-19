var $win = $(window),
    $fixed = $(".but_home"),
    limit = 300;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
    var top = $win.scrollTop();

    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});