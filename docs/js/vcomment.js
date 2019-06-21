"use strict";
const PLACE_HOLDER = "遵守法律法规，理性讨论,建议留下邮箱,否则你无法收到回复通知";
const APP_ID = "VLA81Yn1kDUEgE9A99Qwnb1u-gzGzoHsz";
const APP_KEY = "CpivAcjiG4W9BWNpS2z47X98";
const _ELE_ID = "vcomment";
function getEle() {
    return document.getElementById(_ELE_ID);
}
function initEle(_ele_) {
    let setting = {
        el: "#" + _ELE_ID,
        placeholder: PLACE_HOLDER,
        appId: APP_ID,
        appKey: APP_KEY
    };
    var vid = _ele_.getAttribute("vid");
    if (vid != null) {
        setting.path = vid;
    }
    new Valine(setting);
}
$(function () {
    var ele = getEle();
    if (ele != null) {
        initEle(ele);
    }
});
