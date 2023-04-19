


async function Boe() {
  const url = "http://localhost:1123/selboe"
  const response = await fetch(url);
  const json = await response.json();
 
  return json
}
async function Pud() {
  const url = "http://localhost:1123/selpud"
  const response = await fetch(url);
  const json = await response.json();
  

  return json
}
async function Bar() {
  const url = "http://localhost:1123/selbar"
  const response = await fetch(url);
  const json = await response.json();
  

  return json
}

    
   Boe()
   Pud()
   Bar()

   let chartInstance = null

   
   async function upd() {
     const ctx = document.getElementById('myChart');
   
     const datapoints = await Promise.all([Boe(), Pud(), Bar()]);
   
     const number = datapoints[0].map(datapoints => datapoints.liczbaglosow);
     const black = datapoints[1].map(datapoints => datapoints.liczbaglosow);
     const vlad = datapoints[2].map(datapoints => datapoints.liczbaglosow);
   
     if (chartInstance !== null) {
       chartInstance.destroy();
       chartInstance = null;
     }
   
     chartInstance = new Chart(ctx, {
       type: 'pie',
       data: {
         labels: ['Boe Jiden', 'Władysław Pudding', 'Barrack Obamium'],
         color: "white",
         datasets: [{
           label: 'Ilość głosów',
           data: [number, black, vlad],
           backgroundColor: ['#000039 ', '#1a2421 ', '#353839'],
           borderWidth: 0.6,
           borderColor: '#f0ffff ',
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         },
         plugins: {
           title: {
             display: true,
             text: 'Custom Title',
             color: '#f0ffff ' 
           },
           legend: {
             labels: {
               color: 'white'
             }
           }
         },
         height: 200,
         width: 300,
       },
     });
   }
   
   setInterval(async function(){
    const n = await upd()
   }, 10000)

  

async function getData(){
  const tabela = document.getElementById("tabela");
  
  // Create a WebSocket connection
  const ws = new WebSocket('ws://localhost:1123');
  
  // Add an event listener to the WebSocket object to listen for 'message' events
  ws.addEventListener('message', event => {
    // When a message is received, clear the existing table and redraw it with updated data
    tabela.innerHTML = '';
    drawTable();
  });

  // Helper function to draw the table with data from the server
  async function drawTable() {
    const response = await fetch('http://localhost:1123/select');
    const data = await response.json();

    // Create a table element and header row
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Add table headers
    const headers = ['Column 1', 'Column 2'];
    headers.forEach(headerText => {
      const header = document.createElement('th');
      const textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    // Add table rows
    data.forEach(rowData => {
      const row = document.createElement('tr');
      const columns = ['column1', 'column2'];
      columns.forEach(columnName => {
        const cell = document.createElement('td');
        const textNode = document.createTextNode(rowData[columnName]);
        cell.appendChild(textNode);
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    tabela.appendChild(table);
  }

  // Draw the initial table with data from the server
  drawTable();
}








  
 


getData()


const socket = new WebSocket('ws://localhost:1123');

socket.addEventListener('message', event => {
  getData();
});


// setInterval(async function(){
//   const d = await getData()
// }, 10000)

async function getVotes(){

  const datas = await fetch("http://localhost:1123/selvotes")
  jsons = await datas.json()
  console.log(jsons)

  const last = document.getElementById("last")
  const h1 = document.createElement("h1")
  last.innerHTML = ""
  h1.innerHTML = "Zostało oddanych już: " + jsons[0].glosy + " głosów"
  last.appendChild(h1)

}
getVotes()

setInterval(async function(){
  const y = await getVotes()
}, 10000)