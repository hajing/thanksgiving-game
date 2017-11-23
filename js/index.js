/**
 * Created by hejing on 2017/11/23.
 */
$(function () {
    $(window).keydown(function (event){
        var keycode = event.which;
        if (keycode == 13) {
            var url_value = $("#inputinfo").val();
            if(url_value == ""){
                alert("请输入单词再访问呀");
                return false;
            }else {
                var url_open = 'https://hajing.github.io/thanksgiving-game/' + url_value + '.html';
                window.open(url_open, "_blank");
            }
        };
    });
});