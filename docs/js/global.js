"use strict";
$(document).ready(() => {
    setTimeout(() => {
        try {
            $('html, body').animate({ scrollTop: $("#" + getUrlParam("node")).offset().top - 50 }, 1000);
        }
        catch (_a) { }
    }, 500);
});
