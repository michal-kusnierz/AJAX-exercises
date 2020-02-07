const createTableHeader = tableId => {
  const tableHeaderRow = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  const th4 = document.createElement('th');
  th1.appendChild(document.createTextNode("ProductId"));
  th2.appendChild(document.createTextNode("Type"));
  th3.appendChild(document.createTextNode("Price"));
  th4.appendChild(document.createTextNode("Examine"));
  tableHeaderRow.appendChild(th1);
  tableHeaderRow.appendChild(th2);
  tableHeaderRow.appendChild(th3);
  tableHeaderRow.appendChild(th4);
  document.getElementById(tableId).appendChild(tableHeaderRow);
};

const updateTable = (tableId,productArray) => {
  const tableBody = document.getElementById(tableId);
  //reset table
  while (tableBody.hasChildNodes()) {   
    tableBody.removeChild(tableBody.firstChild);
  }
  //create table header
  createTableHeader(tableId);
  //populate table rows
  for (i = 0; i < productArray.length; i++) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('button');

    td4.addEventListener('click',() => {
        
    });
    td1.appendChild(document.createTextNode(productArray[i].id));
    td2.appendChild(document.createTextNode(productArray[i].type));
    td3.appendChild(document.createTextNode(productArray[i].price));
    td4.appendChild(document.createTextNode("Examine"));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.appendChild(tr);
  }  
};

const updateExaminedText = product => {
  let outputString = "Product Id: " + product.id;
  outputString += "<br> Price: " + product.price;
  outputString += "<br> Type: " + product.type;
  document.getElementById("productText").innerHTML = outputString;
};

const getIntersection = (arrA,arrB,searchedId) => {

  const samePrice = arrA;
  const sameType = arrB;
  const similarArray = [];
  samePrice.forEach((obj1) => {
      sameType.forEach((obj2) => {
          if(obj1.id == obj2.id && obj1.id != searchedId)
              similarArray.push(obj1);     
      });
  });

  return similarArray;
};

const processSearch = searchId => {
  api.searchProductById(searchId).then((val) => {
      return Promise.all([api.searchProductsByPrice(val.price,50),api.searchProductsByType(val.type),val]);
  }).then((val) => {
      let similarArray = getIntersection(val[0],val[1],val[2].id);
      updateExaminedText(val[2]);
      updateTable('similarTable',similarArray);
  }).catch((val) => {
      console.log(val);
  });
};


api.searchAllProducts().then((value) => {
  updateTable('allTable',value);
});

document.getElementById("searchInput_btn").addEventListener('click', () => {
  processSearch(document.getElementById('searchInput').value);
});