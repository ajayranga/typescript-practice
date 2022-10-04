import { Feature, Map, Overlay, View } from 'ol/index';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { useGeographic } from 'ol/proj';

useGeographic();

const genMap = (lat: number, long: number) => {
  const place = [long, lat];
  const point = new Point(place);
  const map = new Map({
    target: 'map',
    view: new View({
      center: place,
      zoom: 16,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point)],
        }),
        style: {
          'circle-radius': 9,
          'circle-fill-color': 'red',
        },
      }),
    ],
  });
  const element = document.getElementById('popup')!;

  const popup = new Overlay({
    element: element,
    stopEvent: false,
  });
  map.addOverlay(popup);
};
export default genMap;
