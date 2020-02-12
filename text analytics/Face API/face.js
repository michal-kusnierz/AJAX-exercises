const submitImage = document.getElementById('processImage');
let reqBody = document.getElementById('inputImage').value;

submitImage.addEventListener('click', () => {
  let sourceImageUrl = document.getElementById('inputImage').value;
  document.querySelector('#sourceImage').src = sourceImageUrl;
  let uriBase = `https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?
  returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender`;

  let myHeader = new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '17a26f2fbc9240aebfb272df98928812'
  });

  let initObject = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ url: reqBody }),
    headers: myHeader
  };

  let request = new Request(uriBase, initObject);

  fetch(request)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(new Error(res.statusText));
      }
    })
    .then(data => {
      console.log(data[0]['faceAttributes']['age']);
      document.getElementById('age').textContent = `Age: ${
        data[0]['faceAttributes']['age']
      }`;
      document.getElementById('gender').textContent = `Gender: ${
        data[0]['faceAttributes']['gender']
      }`;
    })
    .catch(err => {
      console.log(err);
    });
});
