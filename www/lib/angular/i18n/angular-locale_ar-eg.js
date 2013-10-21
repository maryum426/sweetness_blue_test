angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO:"zero", ONE:"one", TWO:"two", FEW:"few", MANY:"many", OTHER:"other"};
    $provide.value("$locale", {"NUMBER_FORMATS":{"DECIMAL_SEP":",", "GROUP_SEP":".", "PATTERNS":[
        {"minInt":1, "minFrac":0, "macFrac":0, "posPre":"", "posSuf":"", "negPre":"", "negSuf":"-", "gSize":3, "lgSize":3, "maxFrac":3},
        {"minInt":1, "minFrac":2, "macFrac":0, "posPre":"\u00A4 ", "posSuf":"", "negPre":"\u00A4 ", "negSuf":"-", "gSize":3, "lgSize":3, "maxFrac":2}
    ], "CURRENCY_SYM":"£"}, "pluralCat":function (n) {
        if (n == 0) {
            return PLURAL_CATEGORY.ZERO;
        }
        if (n == 1) {
            return PLURAL_CATEGORY.ONE;
        }
        if (n == 2) {
            return PLURAL_CATEGORY.TWO;
        }
        if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
            return PLURAL_CATEGORY.FEW;
        }
        if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
            return PLURAL_CATEGORY.MANY;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "DATETIME_FORMATS":{"MONTH":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], "SHORTMONTH":["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], "DAY":["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], "SHORTDAY":["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], "AMPMS":["ص", "م"], "medium":"dd‏/MM‏/yyyy h:mm:ss a", "short":"d‏/M‏/yyyy h:mm a", "fullDate":"EEEE، d MMMM، y", "longDate":"d MMMM، y", "mediumDate":"dd‏/MM‏/yyyy", "shortDate":"d‏/M‏/yyyy", "mediumTime":"h:mm:ss a", "shortTime":"h:mm a"}, "id":"ar-eg"});
}]);