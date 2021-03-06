const button = document.getElementById("analyseBtn");
const input = document.getElementById("analyseInput");
const output = document.getElementById("analyseOutput");

const analyse = () => {

  let reqBody = {
    "documents": [
      {
      "language":"en",
      "id" : 1,
      "text": input.value
      }
    ]
  };

  const myHeader =  new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': 'ec9669c1f31942f582e0fa03436b8595'
  });

  const initObject = {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: myHeader
  };

  const request = new Request('https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', initObject);

  fetch(request)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(response => {
      output.innerHTML =
        "Total Key Phrases: " +
        response.documents[0].keyPhrases.length +
        "</br>" +
        response.documents[0].keyPhrases;
    })
    .catch(err => {
      console.log(err);
      output.innerHTML = "";
    });
};

button.addEventListener("click", analyse);