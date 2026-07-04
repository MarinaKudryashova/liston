document.addEventListener("DOMContentLoaded", function () {
  const mapContainerArr = document?.querySelectorAll(".map");
  if (mapContainerArr) {
    mapContainerArr.forEach((mapContainer) => {
      let center = `${mapContainer.dataset.center}`.split(",");
      let hintMaket = `<div class="map__hint">${mapContainer.dataset.hint}</div>`;
      function init() {
        let map = new ymaps.Map(mapContainer, {
          center: center,
          zoom: 14,
        });

        let placemark = new ymaps.Placemark(center);

        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("rulerControl");
        map.behaviors.disable(["scrollZoom"]);
        map.geoObjects.add(placemark);
      }
      ymaps.ready(init);
    });
  }
});
