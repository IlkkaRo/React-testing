const caturl = 'https://aws.random.cat/meow'
getJSONfromServer(caturl);

function getJSONfromServer(url) {
  let request = new XMLHttpRequest();

  request.open('GET', url);
  request.responseType = 'json';
  request.send();


request.onload = function () {
  let response = request.response;
  console.log(response);
  document.getElementById('kitties').src = response.file;
}
}
