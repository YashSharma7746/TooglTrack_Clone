function myfunction(){
    let x= document.getElementById("password");
    let y=document.getElementById("hide1");
    let z=document.getElementById("hide2");

    if(x.type === "password"){
        x.type="text"
        y.style.display="block"
        z.style.display="none"
    }else{
        x.type="password"
        y.style.display="none"
        z.style.display="block"
    }
}