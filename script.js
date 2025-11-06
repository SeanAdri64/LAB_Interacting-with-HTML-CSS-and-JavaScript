//1.1. Muestre un contador, los estilos dependen de cada uno.
let contador = 0;
    const contadorElemento = document.getElementById("contador");
    //1.2. Hacer un botón para incrementar el contador (Con JS). 
    const btnIncrementar = document.getElementById("incrementar");
    const btnDecrementar = document.getElementById("decrementar");
    btnIncrementar.addEventListener("click", () => {
      contador++;
      actualizarContador();
    });
    // 2. Agregar un nuevo botón, que ahora, decrementa el conteo
    btnDecrementar.addEventListener("click", () => {
      contador--;
      actualizarContador();
    });
    function actualizarContador() {
      contadorElemento.textContent = contador;
    //3. Cambie el color del contador cuando llegue a 10
      if (contador >= 10) {
        contadorElemento.style.color = "#ffffffff"; 
      } else if (contador < 0) {
        console.log("Contador menor a cero, números negativos")
      } else {
        contadorElemento.style.color = "#2d3436"; // color normal
      }
    }