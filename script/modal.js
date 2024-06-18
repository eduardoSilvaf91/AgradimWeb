const modal = document.getElementById("modal");
const botaoFechar = document.getElementById("botaoFechar");
const imgModal = document.getElementById("imgModal")

botaoFechar.addEventListener("click", fecharModal);


// variaveis imagems
const imgBeliscao = document.getElementById("imgBeliscao");
const imgCanela = document.getElementById("imgCanela");
const imgCristaslizadas = document.getElementById("imgCristaslizadas");
const imgCoquinho = document.getElementById("imgCoquinho");
const imgChocolate = document.getElementById("imgChocolate");
const imgBroa = document.getElementById("imgBroa");
const imgCacau = document.getElementById("imgCacau");
const imgLimaozinho = document.getElementById("imgLimaozinho");
const imgGengibre = document.getElementById("imgGengibre");


imgBeliscao.addEventListener("click", lamb => abrirModal(imgBeliscao.getAttribute("src")));
imgCanela.addEventListener("click", lamb => abrirModal(imgCanela.getAttribute("src")));
imgCristaslizadas.addEventListener("click", lamb => abrirModal(imgCristaslizadas.getAttribute("src")));
imgCoquinho.addEventListener("click", lamb => abrirModal(imgCoquinho.getAttribute("src")));
imgChocolate.addEventListener("click", lamb => abrirModal(imgChocolate.getAttribute("src")));
imgBroa.addEventListener("click", lamb => abrirModal(imgBroa.getAttribute("src")));
imgCacau.addEventListener("click", lamb => abrirModal(imgCacau.getAttribute("src")));
imgLimaozinho.addEventListener("click", lamb => abrirModal(imgLimaozinho.getAttribute("src")));
imgGengibre.addEventListener("click", lamb => abrirModal(imgGengibre.getAttribute("src")));


function fecharModal(){
    modal.setAttribute("style","display: none;");
}

function abrirModal(img){
    imgModal.setAttribute("src", ""+img+"");
    modal.setAttribute("style","display: inline;");
}