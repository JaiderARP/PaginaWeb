let leftArrow = document.getElementById("leftArrow");
let imgNoruegaCamry = document.getElementsBy("imgNoruegaCamry");
let imgNoruegaPlaya = document.getElementById("imgNoruegaPlaya");
let imgNoruegaRav4 = document.getElementById("imgNoruegaRav4");

leftArrow.addEventListener("click", function(){
    if (imgNoruegaCamry.classlist.contains("img-Noruega-Camry")){
        imgNoruegaCamry.classlist.remove("img-Noruega-Camry");
        imgNoruegaCamry.classlist.add("img-Noruega-Camry-hidden");
        imgNoruegaPlaya.classlist.add("img-Noruega-Playa");
        imgNoruegaPlaya.classList.remove("img-Noruega-Playa-hidden-right");
    }
    else if(imgNoruegaPlaya.classList.contains("img-Noruega-Playa")) {
        imgNoruegaPlaya.classList.remove("img-Noruega-Playa");
        imgNoruegaPlaya.classList.add("img-Noruega-Playa-hidden-left");
        imgNoruegaRav4.classList.add("img-Noruega-rav4");
        imgNoruegaRav4.classList.remove("img-Noruega-rav4-hidden-right");
    }

    
});
