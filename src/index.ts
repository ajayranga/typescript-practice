import { fromLonLat } from 'ol/proj';
import axios from 'axios';

import '../index.css';
import genMap from './map';

const form = document.querySelector('form')! as HTMLFormElement;
const addressElement = document.querySelector('#address')! as HTMLInputElement;
const map = document.getElementById('map')! as HTMLDivElement;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  map.innerHTML = '';
  const apikey = 'ff2a22b44aa75f4f29e5b606ca3f1879';
  var url = `http://api.positionstack.com/v1/forward?access_key=${apikey}&query=${encodeURI(
    addressElement.value
  )}`;
  const options = {
    method: 'GET',
    url: url,
  };

  axios
    .request(options)
    .then(function (response) {
      genMap(response.data.data[0].latitude, response.data.data[0].longitude);
    })
    .catch(function (error) {
      console.error(error);
    });
};

form.addEventListener('submit', searchAddressHandler);

fromLonLat([29.966225437415403, 76.82017990583734]);
