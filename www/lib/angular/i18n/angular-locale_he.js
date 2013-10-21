angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO:"zero", ONE:"one", TWO:"two", FEW:"few", MANY:"many", OTHER:"other"};
    $provide.value("$locale", {"DATETIME_FORMATS":{"MONTH":["ינואר", "פברואר", "מרס", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], "SHORTMONTH":["ינו", "פבר", "מרס", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"], "DAY":["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], "SHORTDAY":["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], "AMPMS":["לפנה״צ", "אחה״צ"], "medium":"d בMMM yyyy HH:mm:ss", "short":"dd/MM/yy HH:mm", "fullDate":"EEEE, d בMMMM y", "longDate":"d בMMMM y", "mediumDate":"d בMMM yyyy", "shortDate":"dd/MM/yy", "mediumTime":"HH:mm:ss", "shortTime":"HH:mm"}, "NUMBER_FORMATS":{"DECIMAL_SEP":".", "GROUP_SEP":",", "PATTERNS":[
        {"minInt":1, "minFrac":0, "macFrac":0, "posPre":"", "posSuf":"", "negPre":"-", "negSuf":"", "gSize":3, "lgSize":3, "maxFrac":3},
        {"minInt":1, "minFrac":2, "macFrac":0, "posPre":"", "posSuf":" \u00A4", "negPre":"-", "negSuf":" \u00A4", "gSize":3, "lgSize":3, "maxFrac":2}
    ], "CURRENCY_SYM":"₪"}, "pluralCat":function (n) {
        if (n == 1) {
            return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "id":"he"});
}]);