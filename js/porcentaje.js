function generarGrafica() {
    let dato1 = parseFloat(document.getElementById("dato1").value);
    let dato2 = parseFloat(document.getElementById("dato2").value);
    let dato3 = parseFloat(document.getElementById("dato3").value);
    let dato4 = parseFloat(document.getElementById("dato4").value);
    let dato5 = parseFloat(document.getElementById("dato5").value);

    let total = dato1 + dato2 + dato3 + dato4 + dato5;

    let porcentajeDato1 = (dato1 * 100) / total;console.log(porcentajeDato1)
    let porcentajeDato2 = (dato2 * 100) / total;
    let porcentajeDato3 = (dato3 * 100) / total;
    let porcentajeDato4 = (dato4 * 100) / total;
    let porcentajeDato5 = (dato5 * 100) / total;

    let barContainer = document.getElementById("chartContainer");
    barContainer.innerHTML = ""; 
    
    crearBarra(" ", porcentajeDato1, { backgroundColor: "#FFCE56" });
    crearBarra(" ", porcentajeDato2, { backgroundColor: "#FFCE56" });
    crearBarra(" ", porcentajeDato3, { backgroundColor: "#FFCE56" });
    crearBarra(" ", porcentajeDato4, { backgroundColor: "#FFCE56" });
    crearBarra(" ", porcentajeDato5, { backgroundColor: "#FFCE56" });
}

function crearBarra(label, porcentaje, estilos) {
    let barContainer = document.getElementById("chartContainer");

    let bar = document.createElement("div");
    bar.className = "bar";
    
    let innerBar = document.createElement("div");
    innerBar.className = "innerBar";
    innerBar.style.width = porcentaje + "%";
    
    for (let estilo in estilos) {
        innerBar.style[estilo] = estilos[estilo];
    }

    let labelElement = document.createElement("div");
    labelElement.className = "label";
    labelElement.textContent = label;

    let percentageElement = document.createElement("div");
    percentageElement.className = "percentage";
    percentageElement.textContent = porcentaje.toFixed(0) + "%"; 

    bar.appendChild(innerBar);
    bar.appendChild(labelElement);
    bar.appendChild(percentageElement);

    barContainer.appendChild(bar);
}