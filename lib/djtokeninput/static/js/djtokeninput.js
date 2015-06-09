function merge_settings(settings1, settings2){
    var obj_result = {};
    for (var attrname in settings1) {
        obj_result[attrname] = settings1[attrname];
    }
    for (var attrname in settings2) {
        obj_result[attrname] = settings2[attrname];
    }
    return obj_result;
}

jQuery(function() {
    jQuery("input.tokeninput").each(function() {
        // TODO: make i18n
        var settings = {
            hintText: "Tedarikçi arayın",
            noResultsText: "Sonuç yok",
            resultsLimit: 5,
            tokenLimit:1,
            minChars:3,
            searchingText: "Aranıyor"
        }
        var field = jQuery(this);
        field.tokenInput(
            field.data("search-url"),
            merge_settings(field.data("settings"), settings)
        );
    });
});
