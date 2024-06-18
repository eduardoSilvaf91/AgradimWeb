let indexIMG = 1;
let indexBordaImg = 1;
const qntImg = 23;


const imgPricipal= document.getElementById("imgPricipal");
const botaoPrev= document.getElementById("prev");
const botaoNext= document.getElementById("next");

const img1= document.getElementById("img1");
const img2= document.getElementById("img2");
const img3= document.getElementById("img3");
const img4= document.getElementById("img4");
const img5= document.getElementById("img5");
const img6= document.getElementById("img6");
const img7= document.getElementById("img7");
const img8= document.getElementById("img8");
const img9= document.getElementById("img9");
const img10= document.getElementById("img10");
const img11= document.getElementById("img11");
const img12= document.getElementById("img12");
const img13= document.getElementById("img13");
const img14= document.getElementById("img14");
const img15= document.getElementById("img15");
const img16= document.getElementById("img16");
const img17= document.getElementById("img17");
const img18= document.getElementById("img18");
const img19= document.getElementById("img19");
const img20= document.getElementById("img20");
const img21= document.getElementById("img21");
const img22= document.getElementById("img22");
const img23= document.getElementById("img23");


img1.addEventListener("click", lamb => setImg(1));
img2.addEventListener("click", lamb => setImg(2));
img3.addEventListener("click", lamb => setImg(3));
img4.addEventListener("click", lamb => setImg(4));
img5.addEventListener("click", lamb => setImg(5));
img6.addEventListener("click", lamb => setImg(6));
img7.addEventListener("click", lamb => setImg(7));
img8.addEventListener("click", lamb => setImg(8));
img9.addEventListener("click", lamb => setImg(9));
img10.addEventListener("click", lamb => setImg(10));
img11.addEventListener("click", lamb => setImg(11));
img12.addEventListener("click", lamb => setImg(12));
img13.addEventListener("click", lamb => setImg(13));
img14.addEventListener("click", lamb => setImg(14));
img15.addEventListener("click", lamb => setImg(15));
img16.addEventListener("click", lamb => setImg(16));
img17.addEventListener("click", lamb => setImg(17));
img18.addEventListener("click", lamb => setImg(18));
img19.addEventListener("click", lamb => setImg(19));
img20.addEventListener("click", lamb => setImg(20));
img21.addEventListener("click", lamb => setImg(21));
img22.addEventListener("click", lamb => setImg(22));
img23.addEventListener("click", lamb => setImg(23));

botaoNext.addEventListener("click", nextImg);
botaoPrev.addEventListener("click", prevImg);





function nextImg(){

    if (indexIMG == qntImg){
        indexIMG = 1;
        setImg(indexIMG);

    }
    else{
        setImg(indexIMG + 1);
    }
}

function prevImg(){

    if (indexIMG == 1){
        indexIMG = qntImg;
        setImg(indexIMG);

    }
    else{
        setImg(indexIMG - 1);
    }
}


function setImg(index){
    console.log(index)
    imgPricipal.setAttribute("src", "images/Galeria/img"+index+".jpeg" )
    indexIMG = index;
    setBorderImg(index);

}

function setBorderImg(index){

    let borda = "border: 3px solid black;"


    switch (index) {
        case 1:
            img1.setAttribute("style",borda);
            break;

        case 2:
            img2.setAttribute("style",borda);
            break;

        case 3:
            img3.setAttribute("style",borda);
            break;
        
        case 4:
            img4.setAttribute("style",borda);
            break;
            
        case 5:
            img5.setAttribute("style",borda);
            break;
        
        case 6:
            img6.setAttribute("style",borda);
            break;
    
        case 7:
            img7.setAttribute("style",borda);
            break;

        case 8:
            img8.setAttribute("style",borda);
            break;
            
        case 9:
            img9.setAttribute("style",borda);
            break;
            
        case 10:
            img10.setAttribute("style",borda);
            break;
        
        case 11:
            img11.setAttribute("style",borda);
            break;
            
        case 12:
            img12.setAttribute("style",borda);
            break;

        case 13:
            img13.setAttribute("style",borda);
            break;
           
        case 14:
            img14.setAttribute("style",borda);
            break;
            
        case 15:
            img15.setAttribute("style",borda);
            break;
            
        case 16:
            img16.setAttribute("style",borda);
            break;
            
        case 17:
            img17.setAttribute("style",borda);
            break;
            
        case 18:
            img18.setAttribute("style",borda);
            break;
            
        case 19:
            img19.setAttribute("style",borda);
            break;

        case 20:
            img20.setAttribute("style",borda);
            break;

        case 21:
            img21.setAttribute("style",borda);
            break;

        case 22:
            img22.setAttribute("style",borda);
            break;

        case 23:
            img23.setAttribute("style",borda);
            break;
    }

    // remover borta

    switch (indexBordaImg) {
        case 1:
            img1.setAttribute("style","border: none;");
            break;

        case 2:
            img2.setAttribute("style","border: none;");
            break;

        case 3:
            img3.setAttribute("style","border: none;");
            break;
        
        case 4:
            img4.setAttribute("style","border: none;");
            break;
            
        case 5:
            img5.setAttribute("style","border: none;");
            break;
        
        case 6:
            img6.setAttribute("style","border: none;");
            break;
    
        case 7:
            img7.setAttribute("style","border: none;");
            break;

        case 8:
            img8.setAttribute("style","border: none;");
            break;
            
        case 9:
            img9.setAttribute("style","border: none;");
            break;
            
        case 10:
            img10.setAttribute("style","border: none;");
            break;
        
        case 11:
            img11.setAttribute("style","border: none;");
            break;
            
        case 12:
            img12.setAttribute("style","border: none;");
            break;

        case 13:
            img13.setAttribute("style","border: none;");
            break;
           
        case 14:
            img14.setAttribute("style","border: none;");
            break;
            
        case 15:
            img15.setAttribute("style","border: none;");
            break;
            
        case 16:
            img16.setAttribute("style","border: none;");
            break;
            
        case 17:
            img17.setAttribute("style","border: none;");
            break;
            
        case 18:
            img18.setAttribute("style","border: none;");
            break;
            
        case 19:
            img19.setAttribute("style","border: none;");
            break;

        case 20:
            img20.setAttribute("style","border: none;");
            break;

        case 21:
            img21.setAttribute("style","border: none;");
            break;
        case 22:
            img22.setAttribute("style","border: none;");
            break;
        case 23:
            img23.setAttribute("style","border: none;");
            break;
    }

    indexBordaImg = index

}