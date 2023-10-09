$(document).ready(function () {
  var a = false;

  $("a[data-gallery]").click(function (e) {
    e.preventDefault(); // Отменяем стандартное действие ссылки
    var $this = $(this);
    var galleryIndex = $this.data("gallery") - 1; // Устанавливаем индекс с учетом начала с 0
    var t =
      "/json_data.php?data_type=photogallery&id=" + $this.data("gallery-id");

    console.log("Значение data-gallery: " + galleryIndex); // Выводим значение в консоль

    if (!a) {
      a = true;

      $.getJSON(t, {
        format: "json",
      })
        .done(function (data) {
          $this.lightGallery({
            hash: false,
            share: false,
            dynamic: true,
            dynamicEl: data,
            index: galleryIndex, // Используем установленный индекс
            download: false,
            backdropDuration: 500,
          });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          alert("Nastala chyba při načítání galerie. Prosím zkuste to znовu.");
          console.error(
            "getJSON failed, status: " + textStatus + ", error: " + errorThrown
          );
          console.error(jqXHR);
        })
        .always(function () {
          a = false;
        });
    }
  });
});
