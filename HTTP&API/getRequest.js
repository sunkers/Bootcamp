const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
const httprequest = function(url) {
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Error:', xhr.status);
    }
  };
  xhr.send();
}

module.exports = httprequest;

