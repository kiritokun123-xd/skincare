
document.addEventListener("DOMContentLoaded",function(){
    if(document.querySelector(".box")){
        crearGaleriaB();
    }
    if(document.querySelector(".articulo")){
        crearGaleriaA();
    }
    if(document.querySelector(".polo")){
        crearGaleriaP();
    }
})

//Galeria Polos
function crearGaleriaP(){
    const galeria = document.querySelector(".galeria-box");
    for(let i = 1; i<= 6; i++){
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/polos/${i}.webp`;
        imagen.dataset.imagenId = i;

        //funcion ampliar imagen
        imagen.onclick = ampliarImagen;
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}
//Galeria Artículos
function crearGaleriaA(){
    const galeria = document.querySelector(".galeria-box");
    for(let i = 1; i<= 25; i++){
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/articulos/${i}.webp`;
        imagen.dataset.imagenId = i;

        //funcion ampliar imagen
        imagen.onclick = ampliarImagen;

        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}
//Galeria Box
function crearGaleriaB(){
    const galeria = document.querySelector(".galeria-box");
    for(let i = 1; i<= 14; i++){
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/boxes/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;


        //funcion ampliar imagen
        imagen.onclick = ampliarImagen;
        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        
        galeria.appendChild(lista);

        //añadir promoción
        if(i == 3 || i == 8 || i == 11){
            const promo = document.createElement("P");
            promo.textContent = "Promoción";
            promo.classList.add("promo");

            lista.appendChild(promo);
        }
    }
}
function ampliarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    //console.log(id);

    //gererar imagen
    const imagen = document.createElement("IMG");
    if(document.querySelector(".box")){
        imagen.src = `build/img/boxes/grande/${id}.webp`;
    }
    if(document.querySelector(".articulo")){
        imagen.src = `build/img/articulos/${id}.webp`;
    }
    if(document.querySelector(".polo")){
        imagen.src = `build/img/polos/${id}.webp`;
    }

    const altoPantalla = screen.height;
    const altoEnRem = altoPantalla / 10 - 15;
    //console.log(altoEnRem);
    imagen.style.cssText = `max-height: ${altoEnRem}rem;`;

    //crear boton pedir
    const boton = document.createElement("A");
    boton.href = "https://wa.me/message/QRLCOYZHF4TZA1";
    boton.target = "_blank";
    boton.textContent = "Pedir Ahora";
    boton.classList.add("boton-pedir");

    //creamos overlay
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.appendChild(boton);
    overlay.classList.add("overlay");

    //Click cerrar imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }


    //Mostrar en el HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}


const hamburger = document.getElementById("hamburger");
const navP = document.getElementById("nav-p");

hamburger.addEventListener("click", ()=>{
    navP.classList.toggle("show");
    navP.classList.toggle("aparecer-nav");
});



//Elemento a observar
const contacto = document.querySelector("#contactenos");

//Customs
const options2 = {
    //root:
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
}

document.addEventListener("DOMContentLoaded", function(){
    CrearSubir();
});

//Funcion callback
function callback2(entries, observer){
    if(entries[0].isIntersecting){
        //Si hay interseccion con el elemento obervado
        mostrarSubir();
        console.log("intersecta");
    }else{
        //Si no hay interseccion
        desaparecerSubir();
        console.log("No intersecta");
    }
}

const observer2 = new IntersectionObserver(callback2, options2);
observer2.observe(contacto);

//Crear boton de subir
function CrearSubir(){
    const linkSubir = document.createElement("IMG");
    linkSubir.src = "build/img/uparrow.png"

    const botonSubir = document.createElement("A");
    botonSubir.href = "#inicio";
    botonSubir.appendChild(linkSubir);
    botonSubir.classList.add("botonSubir");

    body.appendChild(botonSubir);
}

function mostrarSubir(){
    document.querySelector(".botonSubir").classList.add("aparece-subir");
    document.querySelector(".botonSubir").classList.remove("desaparece-subir");
}
function desaparecerSubir(){
    document.querySelector(".botonSubir").classList.add("desaparece-subir");
}
//console.log("Hola te obsero uwu");

//Elemento a mostrar
const barra = document.querySelector(".contenido-header__nav");

//Elemento a observar
const header = document.querySelector(".header");

//el body
const body = document.querySelector("body");

//Customs
const options = {
    //root:
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
}

//Funcion callback
function callback(entries, observer){
    if(entries[0].isIntersecting){
        //Si hay interseccion con el elemento obervado
        if(document.querySelector(".header-flotante") !== null){
            document.querySelector(".header-flotante").classList.add("desaparecer-nav");
        }
        setTimeout(quitarNavegador,800);
    }else{
        //Si no hay interseccion
        mostrarNavegador();

        const hamburger2 = document.getElementById("hamburger2");
        const nav2 = document.getElementById("nav-p2");
    
        hamburger2.addEventListener("click", ()=>{
          nav2.classList.toggle("show");
          nav2.classList.toggle("aparecer-nav");
        });
    }
}

//Creamos nuestro observer
const observer = new IntersectionObserver(callback, options);
observer.observe(header);
let direccionE = [];
let contenidoE = [];
if(document.querySelector(".index")){
    // console.log("es index");
    direccionE = ["#inicio","#nosotras","#productos","#entregas","#contactenos"];
    contenidoE = ["Inicio","Nosotras","Productos","Entregas","Contáctenos"];
}else if(document.querySelector(".box")){
    direccionE = ["#inicio","#productos","#contactenos"];
    contenidoE = ["Ir a Inicio","Box","Contáctenos"];
}else if(document.querySelector(".articulo")){
    direccionE = ["#inicio","#productos","#contactenos"];
    contenidoE = ["Ir a Inicio","Artículos","Contáctenos"];
}else if(document.querySelector(".polo")){
    direccionE = ["#inicio","#productos","#contactenos"];
    contenidoE = ["Ir a Inicio","Polos","Contáctenos"];
}

//Crear navegador
function mostrarNavegador(){
    const nav = document.createElement("NAV");
    // console.log(direccionE.length);
    for(let i = 0; i < direccionE.length; i++){
        const enlace = document.createElement("A");
        enlace.href = direccionE[i];
        enlace.textContent = contenidoE[i];
        enlace.onclick = function(){
            document.querySelector("#nav-p2").classList.remove("show");
        }
        nav.appendChild(enlace);
    }

    const enlaceP = document.createElement("A");
    const barras = document.createElement("IMG");

    //Enlace SkinCare
    enlaceP.href = "#inicio";
    enlaceP.textContent = "SkinCare";

    //Barras
    barras.src = "build/img/barras3.png";
    barras.classList.add("hamburger");
    barras.id = "hamburger2";

    //nav
    nav.classList.add("navegacion-principal");
    nav.id = "nav-p2";

    //div que contiene todo
    const contenido = document.createElement("DIV");
    contenido.appendChild(enlaceP);
    contenido.appendChild(barras);
    contenido.appendChild(nav);
    contenido.classList.add("header-flotante");
    contenido.classList.add("aparecer-nav");

    //Mostrar en el HTML
    body.appendChild(contenido);
}
function quitarNavegador(){
    if(document.querySelector(".header-flotante") !== null){
        //console.log("No Existe header flotante");
        body.removeChild(document.querySelector(".header-flotante"));
    }
}
if(document.querySelector(".box")){
    $(document).ready(function(){
        $('html,body').animate({scrollTop: $("#productos").offset().top}, 800);
    });
}
if(document.querySelector(".articulo")){
    $(document).ready(function(){
        $('html,body').animate({scrollTop: $("#productos").offset().top}, 800);
    });
}
if(document.querySelector(".polo")){
    $(document).ready(function(){
        $('html,body').animate({scrollTop: $("#productos").offset().top}, 800);
    });
}
