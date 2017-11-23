/**
 * Created by hejing on 2017/11/23.
 */
$(function () {
    $(window).keydown(function (event){
        var keycode = event.which;
        if (keycode == 13) {
            var url_value = $("#inputinfo").val();
            if(url_value != 'standard'){
                window.open('https://hajing.github.io/thanksgiving-game/success.html', "_blank");
            }else {
                var url_open = 'https://hajing.github.io/thanksgiving-game/' + url_value + '.html';
                window.open(url_open, "_blank");
            }
        };
    });
});