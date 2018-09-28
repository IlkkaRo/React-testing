'use strict';

fetch('https://aws.random.cat/meow')
// .then(res => res.json())
// .then(json => console.log(json))
.then(
  function(response) {
    if(response.status !== 200) {
      console.log('Goddamn problem: ' + response.status);
      return;
    }
    response.json()
    .then(function(data) {
        console.log(data);
        document.getElementById('kitties').src = data.file;
      });
    }
  )
.catch(function(err) {
  console.log('Fetch error :P', err);
});
