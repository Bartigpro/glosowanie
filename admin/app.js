


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
  const data = await fetch("http://localhost:1123/select")
  json = await data.json()
  console.log(json)

  const tabela = document.getElementById("tabela")
  tabela.innerHTML = ""
  

  const table = document.createElement("table")
  const tr = document.createElement("tr")
  table.appendChild(tr)
  const thp = document.createElement("th")
  const thk = document.createElement("th")
  

  
  thp.innerHTML = "Pesel"
  thk.innerHTML = "Wybrany knadydat"

  tr.appendChild(thp)
  tr.appendChild(thk)

  for(var i=0;i<=json.length-1;i++){
  const tr2 = document.createElement("tr")  

  const tdp = document.createElement("td")
  const tdk = document.createElement("td")

  tdp.innerHTML = json[i].Pesel
  tdk.innerHTML = json[i].kandydat

  tr2.appendChild(tdp)
  tr2.appendChild(tdk)

  table.appendChild(tr2)
    

}
table.classList.add("tabelka")
tabela.appendChild(table)
}

getData()

setInterval(async function(){
  const d = await getData()
}, 10000)

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