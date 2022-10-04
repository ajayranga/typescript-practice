import { Feature, Map, View } from 'ol/index';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { useGeographic } from 'ol/proj';

useGeographic();

const genMap = (lat: number, long: number) => {
  const place = [long, lat];
  const point = new Point(place);
  new Map({
    target: 'map',
    view: new View({
      center: place,
      zoom: 4,
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
};
export default genMap;
