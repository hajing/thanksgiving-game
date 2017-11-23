/**
 * Created by hejing on 2017/11/23.
 */
$(function () {
    var el = document.getElementById('typewriter');
    var data = '[{\"mode\":\"+\",\"content\":\"恭\",\"delay\":0},' +
        '{\"mode\":\"+\",\"content\":\"喜\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"你\",\"delay\":97},' +
        '{\"mode\":\"+\",\"content\":\"解\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\"密\",\"delay\":241},' +
        '{\"mode\":\"+\",\"content\":\"成\",\"delay\":239},' +
        '{\"mode\":\"+\",\"content\":\"功\",\"delay\":88},' +
        '{\"mode\":\"+\",\"content\":\"，\",\"delay\":152},' +
        '{\"mode\":\"+\",\"content\":\"请\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"在\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"支\",\"delay\":143},' +
        '{\"mode\":\"+\",\"content\":\"付\",\"delay\":144},' +
        '{\"mode\":\"+\",\"content\":\"宝\",\"delay\":400},' +
        '{\"mode\":\"+\",\"content\":\"口\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"令\",\"delay\":137},' +
        '{\"mode\":\"+\",\"content\":\"红\",\"delay\":311},' +
        '{\"mode\":\"+\",\"content\":\"包\",\"delay\":191},' +
        '{\"mode\":\"+\",\"content\":\"处\",\"delay\":105},' +
        '{\"mode\":\"+\",\"content\":\"输\",\"delay\":416},' +
        '{\"mode\":\"+\",\"content\":\"入\",\"delay\":112},' +
        '{\"mode\":\"+\",\"content\":\"5\",\"delay\":95},' +
        '{\"mode\":\"+\",\"content\":\"4\",\"delay\":196},' +
        '{\"mode\":\"+\",\"content\":\"3\",\"delay\":206},' +
        '{\"mode\":\"+\",\"content\":\"7\",\"delay\":223},' +
        '{\"mode\":\"+\",\"content\":\"8\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":416},' +
        '{\"mode\":\"+\",\"content\":\"2\",\"delay\":88},' +
        '{\"mode\":\"+\",\"content\":\"3\",\"delay\":71},' +
        '{\"mode\":\"+\",\"content\":\"1\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":273},' +
        '{\"mode\":\"+\",\"content\":\"0\",\"delay\":96},' +
        '{\"mode\":\"+\",\"content\":\"9\",\"delay\":223},' +
        '{\"mode\":\"-\",\"delay\":495},' +
        '{\"mode\":\"+\",\"content\":\"6\",\"delay\":185},' +
        '{\"mode\":\"+\",\"content\":\"领\",\"delay\":152},' +
        '{\"mode\":\"+\",\"content\":\"取\",\"delay\":96},' +
        '{\"mode\":\"+\",\"content\":\"红\",\"delay\":136},' +
        '{\"mode\":\"+\",\"content\":\"包\",\"delay\":760},' +
        '{\"mode\":\"+\",\"content\":\"啦\",\"delay\":176},' +
        '{\"mode\":\"+\",\"content\":\"。\",\"delay\":120},' +
        '{\"mode\":\"+\",\"content\":\"嘘\",\"delay\":128},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":495},' +
        '{\"mode\":\"+\",\"content\":\"别\",\"delay\":80},' +
        '{\"mode\":\"+\",\"content\":\"泄\",\"delay\":168},' +
        '{\"mode\":\"+\",\"content\":\"密\",\"delay\":176},' +
        '{\"mode\":\"+\",\"content\":\"啊\",\"delay\":153},' +
        '{\"mode\":\"+\",\"content\":\"！\",\"delay\":455}]';
    //var data = 'json/success.json';
    new TypePlayer(data, function (text) {
        el.innerText = text;
    }, 1.2).play();
});