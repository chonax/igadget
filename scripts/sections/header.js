module.exports = function() {
    body.prepend(
        $(tag("header", {class: "mw-header"}), function() {
            // Move stuff here
        })
    );
    $("#SearchForm form input[type=image]").attr("style","opacity: 0;").wrap("div").parent().addClass("mw_search_btn sprites-search");
};