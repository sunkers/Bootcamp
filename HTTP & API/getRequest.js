const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.google.com');

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error('Error:', xhr.status);
  }
};

xhr.send();

