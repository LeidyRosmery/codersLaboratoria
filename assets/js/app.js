var opcion=document.getElementById("opcion");
var div=document.getElementsByClassName("coders");
var chile=[];
opcion.onchange=function(){
    for (var i = 0; i < div.length; i++) {
      if(div[i].getAttribute("class")==opcion.value){
       div[i].style.display="inline-block"
     }else {
       div[i].style.display="none";
     }
    }
}
