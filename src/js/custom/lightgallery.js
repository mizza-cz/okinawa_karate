document.addEventListener("DOMContentLoaded", function () {
  var isRequestInProgress = false;
  var galleryLinks = document.querySelectorAll("a[data-gallery]");

  galleryLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (!isRequestInProgress) {
        isRequestInProgress = true;
        var gallery = parseInt(this.dataset.gallery);
        var start = this.dataset.start;
        var url =
          "/json_data.php?data_type=photogallery&id=" +
          gallery +
          "&format=json";

        fetch(url)
          .then(function (response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Nastala chyba při načítání galerie.");
            }
          })
          .then(function (data) {
            lightGallery({
              hash: false,
              share: false,
              dynamic: true,
              dynamicEl: data,
              index: start,
              download: false,
              backdropDuration: 500,
            });
          })
          .catch(function (error) {
            alert(error.message);
            console.error(error);
          })
          .finally(function () {
            isRequestInProgress = false;
          });

        event.preventDefault();
      }
    });
  });
});
