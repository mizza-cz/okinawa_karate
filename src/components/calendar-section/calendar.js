jQuery(function ($) {
  $(".datepicker").datepicker({
    firstDay: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd.mm.yy",
  });

  $.datepicker.regional["cs"] = {
    closeText: "Zavřít",
    prevText: "&#x3c;Dříve",
    nextText: "Později&#x3e;",
    currentText: "Nyní",
    monthNamesShort: [
      "leden",
      "únor",
      "březen",
      "duben",
      "květen",
      "červen",
      "červenec",
      "srpen",
      "září",
      "říjen",
      "listopad",
      "prosinec",
    ],

    dayNames: [
      "neděle",
      "pondělí",
      "úterý",
      "středa",
      "čtvrtek",
      "pátek",
      "sobota",
    ],
    dayNamesShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
    dayNamesMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
    weekHeader: "Týd",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  };

  $.datepicker.setDefaults($.datepicker.regional["cs"]);
  $(".datepicker").mousedown(function () {
    $(".ui-datepicker").addClass("active");
  });
});
