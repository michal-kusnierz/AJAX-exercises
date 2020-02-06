const createTableHeader = tableId => {
  const tableHeaderRow = document.createElement('TR');
  const th1 = document.createElement('TH');
  const th2 = document.createElement('TH');
  const th3 = document.createElement('TH');
  const th4 = document.createElement('TH');
  th1.appendChild(document.createTextNode("ProductId"));
  th2.appendChild(document.createTextNode("Type"));
  th3.appendChild(document.createTextNode("Price"));
  th4.appendChild(document.createTextNode("Examine"));
  tableHeaderRow.appendChild(th1);
  tableHeaderRow.appendChild(th2);
  tableHeaderRow.appendChild(th3);
  tableHeaderRow.appendChild(th4);
  document.getElementById(tableId).appendChild(tableHeaderRow);
}