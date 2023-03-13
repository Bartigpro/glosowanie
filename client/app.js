
json = []

async function getData(){
    const data = await fetch("http://localhost:1123/select")
    json = await data.json()
    console.log(json)

   


}
getData()



async function getKans(){
    const data = await fetch("http://localhost:1123/selectkans")
    kanson = await data.json()
    console.log(kanson)

    for(var i=0;i<=kanson.length-1;i++){

       

        const div = document.createElement("div")

        

       div.setAttribute("id", `${i}`)

       
       if(div.id == 0){
        div.setAttribute("onclick", "Jiden()")
        
       }
    if(div.id == 1){
        div.setAttribute("onclick", "barr()")
       }
        if(div.id == 2){
        div.setAttribute("onclick", "pud()")
       }
        
        const h1 = document.createElement("h1")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        
        div.classList.add("kands")
        h1.innerHTML = "Imię i nazwisko: " + kanson[i].Imieinazwisko
        h2.innerHTML = "Lat: " + kanson[i].Lat
        h3.innerHTML = "Ilość zbrodni: " + kanson[i].ilosczbrodni
       
        
        const body = document.getElementById("kan")
        body.appendChild(div)
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(h3)
        

    }
}
getKans()

async function Jiden(){
    const confirmed = confirm("Czy na pewno chcesz oddać swój głow na tego kandydata? Ta decyzja nie będzie odwracalna")
    var inp = document.getElementById("inp").value
    var input = document.getElementById("inp")
    

    if(inp.length == ""){
        alert("Wpisz PESEL w linijce")

    }
   else if(inp.length > 11 || inp.length < 11 ){
        alert("Twój pesel musi mieć długość równą 11 cyfr, wpisz ponownie")
    }



    else{
        
  if(confirmed){

       

   alert("dziękujemy za oddanie głosu")
   disappear()

 const nig = await fetch(`http://localhost:1123/add/${inp}/Boe_Jiden`)
        const dov = await fetch(`http://localhost:1123/plus/1`)
}
 else {

    }
}

}
     
     



async function barr(){
    const confirmed = confirm("Czy na pewno chcesz oddać swój głow na tego kandydata? Ta decyzja nie będzie odwracalna")
    var inp = document.getElementById("inp").value
    var input = document.getElementById("inp")
    

    if(inp.length == ""){
        alert("Wpisz PESEL w linijce")

    }
   else if(inp.length > 11 || inp.length < 11 ){
        alert("Twój pesel musi mieć długość równą 11 cyfr, wpisz ponownie")
    }



    else{
        
  if(confirmed){

   

   alert("dziękujemy za oddanie głosu")
   disappear()
 const nig = await fetch(`http://localhost:1123/add/${inp}/Barrack_Obamium`)
     const dov = await fetch(`http://localhost:1123/plus/2`)} 
     
     else {

    }
}

}
   

async function pud(){
    const confirmed = confirm("Czy na pewno chcesz oddać swój głow na tego kandydata? Ta decyzja nie będzie odwracalna")
    var inp = document.getElementById("inp").value
    var input = document.getElementById("inp")
    

    if(inp.length == ""){
        alert("Wpisz PESEL w linijce")

    }

    else if(inp.length > 11 || inp.length < 11 ){
        alert("Twój pesel musi mieć długość równą 11 cyfr, wpisz ponownie")
    }
    
    else{
        if (confirmed) {
       
     alert("dziękujemy za oddanie głosu")
     disappear()
             const nig = await fetch(`http://localhost:1123/add/${inp}/Wladyslaw_Pudding`)
        const dov = await fetch(`http://localhost:1123/plus/3`)
          
    }
   
}

}

async function disappear(){
    const kan = document.getElementById("kan")
    const body = document.getElementById("body")
    const add = document.getElementById("dod")
   
   
    add.innerHTML = ""
    kan.innerHTML = ""
    kan.style.position = 'fixed';
kan.style.top = '0';
kan.style.left = '0';
kan.style.width = '100%';
kan.style.height = '100%';
   
    
   const h1 = document.createElement("h1")
   h1.innerHTML = "Dziękujemy za oddanie głosu! Wyniki będą ogłoszone za jakiś czas"
   kan.appendChild(h1)
    
}
    