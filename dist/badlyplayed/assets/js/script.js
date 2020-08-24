$(document).ready(function () {
    $("#sobreLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#targetSobre").offset().top
        }, 500);
    });
    $("#historiasLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#targetHistorias").offset().top
        }, 500);
    });
    $("#conteLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#targetConte").offset().top
        }, 500);
    });
    $("#manifestoLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#targetManifesto").offset().top
        }, 500);
    });
});