/**
 * Created by hejing on 2017/11/23.
 */
$(function () {
    var el = document.getElementById('typewriter');
    var data = '[{\"mode\":\"+\",\"content\":\"恭\",\"delay\":0},' +
        '{\"mode\":\"+\",\"content\":\"喜\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"你\",\"delay\":97},' +
        '{\"mode\":\"+\",\"content\":\".\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\".\",\"delay\":241},' +
        '{\"mode\":\"+\",\"content\":\".\",\"delay\":239},' +
        '{\"mode\":\"+\",\"content\":\"解\",\"delay\":88},' +
        '{\"mode\":\"+\",\"content\":\"密\",\"delay\":152},' +
        '{\"mode\":\"+\",\"content\":\"失\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"败\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"，\",\"delay\":143},' +
        '{\"mode\":\"+\",\"content\":\"不\",\"delay\":144},' +
        '{\"mode\":\"+\",\"content\":\"要\",\"delay\":400},' +
        '{\"mode\":\"+\",\"content\":\"气\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"累\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":500},' +
        '{\"mode\":\"+\",\"content\":\"雷\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":540},' +
        '{\"mode\":\"+\",\"content\":\"泪\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":560},' +
        '{\"mode\":\"+\",\"content\":\"馁\",\"delay\":137},' +
        '{\"mode\":\"+\",\"content\":\"，\",\"delay\":311},' +
        '{\"mode\":\"+\",\"content\":\"继\",\"delay\":191},' +
        '{\"mode\":\"+\",\"content\":\"续\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"努\",\"delay\":416},' +
        '{\"mode\":\"+\",\"content\":\"力\",\"delay\":112},' +
        '{\"mode\":\"+\",\"content\":\"吧\",\"delay\":95},' +
        '{\"mode\":\"+\",\"content\":\"，\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"终\",\"delay\":96},' +
        '{\"mode\":\"+\",\"content\":\"究\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\"有\",\"delay\":760},' +
        '{\"mode\":\"+\",\"content\":\"一\",\"delay\":176},' +
        '{\"mode\":\"+\",\"content\":\"个\",\"delay\":120},' +
        '{\"mode\":\"+\",\"content\":\"会\",\"delay\":128},' +
        '{\"mode\":\"+\",\"content\":\"成\",\"delay\":495},' +
        '{\"mode\":\"+\",\"content\":\"功\",\"delay\":80},' +
        '{\"mode\":\"+\",\"content\":\"啊\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":455}]';
    new TypePlayer(data, function (text) {
        el.innerText = text;
    }, 1.2).play();
});