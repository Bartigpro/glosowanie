async function getData(){
    const data = await fetch("http://localhost:5523/select")
    json = await data.json()
    console.log(json)

    for(var i=0;i<=json)


}
getData()

async function add(){
    
    var inp = document.getElementById("inp").value
    var input = document.getElementById("inp")

    const nig = await fetch(`http://localhost:5523/add/${inp}`)

   

}