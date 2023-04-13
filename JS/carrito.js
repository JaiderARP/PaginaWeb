let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");


/*  ------- BOTONES CAMBIO DE IMG ------- */

// imgMini1.addEventListener("click", function(){
//     imgBox.setAttribute("src","img/sneakers/producto1.png")
//     boxImgMini1.classList.add("box-img-mini")
//     boxImgMini2.classList.remove("box-img-mini")
//     boxImgMini3.classList.remove("box-img-mini")
//     boxImgMini4.classList.remove("box-img-mini")
//     boxImgMini1.classList.add("img-mini-act")
//     boxImgMini2.classList.remove("img-mini-act")
//     boxImgMini3.classList.remove("img-mini-act")
//     boxImgMini4.classList.remove("img-mini-act")
// });
// imgMini2.addEventListener("click", function(){
//     imgBox.setAttribute("src","img/sneakers/image-product-2.png")
//     boxImgMini1.classList.remove("box-img-mini")
//     boxImgMini2.classList.add("box-img-mini")
//     boxImgMini3.classList.remove("box-img-mini")
//     boxImgMini4.classList.remove("box-img-mini")
//     boxImgMini1.classList.remove("img-mini-act")
//     boxImgMini2.classList.add("img-mini-act")
//     boxImgMini3.classList.remove("img-mini-act")
//     boxImgMini4.classList.remove("img-mini-act")
// });
// imgMini3.addEventListener("click", function(){
//     imgBox.setAttribute("src","img/sneakers/image-product-3.png")
//     boxImgMini1.classList.remove("box-img-mini")
//     boxImgMini2.classList.remove("box-img-mini")
//     boxImgMini3.classList.add("box-img-mini")
//     boxImgMini4.classList.remove("box-img-mini")
//     boxImgMini1.classList.remove("img-mini-act")
//     boxImgMini2.classList.remove("img-mini-act")
//     boxImgMini3.classList.add("img-mini-act")
//     boxImgMini4.classList.remove("img-mini-act")
// });
// imgMini4.addEventListener("click", function(){
//     imgBox.setAttribute("src","img/sneakers/image-product-4.png")
//     boxImgMini1.classList.remove("box-img-mini")
//     boxImgMini2.classList.remove("box-img-mini")
//     boxImgMini3.classList.remove("box-img-mini")
//     boxImgMini4.classList.add("box-img-mini")
//     boxImgMini1.classList.remove("img-mini-act")
//     boxImgMini2.classList.remove("img-mini-act")
//     boxImgMini3.classList.remove("img-mini-act")
//     boxImgMini4.classList.add("img-mini-act")
// });

function cambiarImagen(nombreImagen, mini) {
    imgBox.setAttribute("src", `img/sneakers/${nombreImagen}.png`);
    imgMinis.forEach(imgMini => imgMini.classList.remove("box-img-mini", "img-mini-act"));
    mini.classList.add("box-img-mini", "img-mini-act");
}

const imgMinis = document.querySelectorAll(".img-mini");
imgMinis.forEach((imgMini, i) => imgMini.addEventListener("click", () => cambiarImagen(`producto${i + 1}`, imgMini)));


imgMini1.addEventListener("click", function(){
    cambiarImagen("producto1", imgMini1);
    imgBox.classList.add("rotate")
});

imgMini2.addEventListener("click", function(){
    cambiarImagen("image-product-2", imgMini2);
    imgBox.classList.add("rotate")
});

imgMini3.addEventListener("click", function(){
    cambiarImagen("image-product-3", imgMini3);
    imgBox.classList.add("rotate")
});

imgMini4.addEventListener("click", function(){
    cambiarImagen("image-product-4", imgMini4);
    imgBox.classList.add("rotate")
});

/* -------- BOTONES DE COMPRA ------ */

let btnRestar = document.getElementById("btnRestar");
let btnSumar = document.getElementById("btnSumar");

btnRestar.addEventListener("click",function(){
    alert("click")
});
btnSumar.addEventListener("click",function(){
    alert("otro click")
})


