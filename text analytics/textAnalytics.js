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

const analyse = () => {};