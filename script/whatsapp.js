const whatsappMsg = document.getElementById("whatsappMsg");
const linkWhatsapp = document.getElementById("linkWhatsapp");

linkWhatsapp.addEventListener("mouseover", mostraMSG);
linkWhatsapp.addEventListener("mouseleave", fechaMSG);

function mostraMSG(){
    whatsappMsg.setAttribute('style', "display: block;");
}

function fechaMSG(){
    whatsappMsg.setAttribute('style', "display: none;");
}