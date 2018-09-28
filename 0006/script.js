'use strict';

fetch('http://gis.vantaa.fi/rest/tyopaikat/v1')
.then(
  function(response) {
    if(response.status !== 200) {
      console.log('Goddamn problem: ' + response.status);
      return;
    }
    response.json()
    .then(function(data) {
        console.log(data);
        document.getElementById('jobCanvas').src = data.file;
      });
    }
  )
.catch(function(err) {
  console.log('Fetch error :P', err);
});

let ctx = document.getElementById('jobCanvas').getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(10, 200, 30, -120);
ctx.fillRect(60, 200, 30, -150);
ctx.fillRect(110, 200, 30, -50);
ctx.fillRect(160, 200, 30, -150);
ctx.fillRect(210, 200, 30, -10);
ctx.fillRect(260, 200, 30, -40);
ctx.fillRect(310, 200, 30, -25);
ctx.fillRect(360, 200, 30, -15);
ctx.fillRect(410, 200, 30, -110);
ctx.fillRect(460, 200, 30, -10);
