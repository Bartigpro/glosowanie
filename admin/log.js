async function getData(){

    const login = document.getElementById("login").value
    const pass = document.getElementById("pass").value



    const data = await fetch(`http://localhost:1123/select/${login}/${pass}`).then( response => response.text())
   
    console.log("cumson")

    if(data == "access"){
        localStorage.setItem("upr", "admin")
        document.getElementById("ahref").style.visibility = "visible"
        
    }
    
    else{
        localStorage.setItem("upr", "usernt")
    }



}

function check(){

    if(localStorage.getItem("upr") != "admin"){
        window.location.href = "login.html"
    }
}