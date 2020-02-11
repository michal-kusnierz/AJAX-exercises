document.getElementById("analyseBtn").addEventListener("click", analyse);

let reqBody = {
  "documents": [
    {
    "language":"en",
    "id" : 1,
    "text": document.getElementById("analyseInput").value
    }
  ]
};

const myHeader =  new Headers({
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'my_api_key'
});

const initObject = {
  method: 'POST',
  body: JSON.stringify(reqBody),
  headers: myHeader
};

const analyse = () => {};