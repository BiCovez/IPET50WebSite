$(document).ready(function() {
    
    $('.flexslider').flexslider({
        prevText: "",
        nextText: "",
        pauseOnAction: false
    });

});


//

function menuFlotante(){
    const floatingMenu = document.querySelectorAll(".floatMenu");

    floatingMenu.style.display = "block"
}

//

// MENU FULLSCREEN

const menuButtons = document.querySelectorAll(".btnMenu");
const menu = document.getElementById("menu");
const cerrar = document.getElementById("menu-close");

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", function() {
    menu.style.display = "block";
    menu.style.height = "100vh";
  });
}

cerrar.addEventListener("click", function() {
  menu.style.display = "none";
  menu.style.height = "0px";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      menu.style.display = "none";
      menu.style.height = "0px";
    }
});

// INFO DEL MENU

const btn1 = document.getElementById("info1");
const btn2 = document.getElementById("info2");
const info = document.getElementById("info");

btn1.addEventListener("click", function() {
  info.innerHTML = "El alumno adquirirá nuevas formas de conocimiento y habilidades dentro de las cienciencias naturales. Algunos objetivos que se tendrán en cuenta son: <br> - Valorar los aportes de las Ciencias Naturales a la sociedad a lo largo de la historia.<br> -Desarrollar el dominio de los conocimientos de las Ciencias Naturales fomentando la capacidad de análisis y razonamiento. <br> -Reconocer e interpretar a los modelos como representaciones que se elaboran y utilizan para explicar y predecir hechos y fenómenos de la naturaleza. <br> -Desarrollar actitudes de curiosidad, exploración y búsqueda sistemática de explicaciones a hechos y fenómenos naturales. <br> -Apropiarse progresivamente del lenguaje científico que permita acceder a la información científica iniciándose en su uso y aplicación. <br> -Aplicar leyes, teorías y modelos científicos para la solución de problemas del entorno. <br> -Lograr la comprensión básica del medio físico, desde el punto de vista científico y de acuerdo con el desarrollo intelectual correspondiente a la edad. <br> -Desarrollar capacidades para el razonamiento lógico y su utilización en la interpretación y solución de los problemas de la ciencia, de la tecnología y los de la vida cotidiana. <br> -Desarrollar las habilidades comunicativas de tipo científico y tecnológico para leer, comprender, escribir, escuchar, hablar y expresarse correctamente. <br> -Valorar el cuidado del ambiente desarrollando una actitud crítica frente a la utilización de los recursos naturales y el deterioro del medio. <br> -Iniciarse en el uso adecuado del material y los instrumentos de laboratorio aplicando las normas de seguridad e higiene.";
});

btn2.addEventListener("click", function() {
  info.innerHTML = "Estas ciencias ofrecen conocimientos teóricos y metodológicos sobre el mundo social. Esto es posible gracias a que brindan un modo de pensar <br> caracterizado por la severidad en la búsqueda de las verdades y la utilización de conceptos precisos. Con la enseñanza de las Ciencias Sociales en la escuela <br> se promueve la formación  general del estudiante y se propicia el conocimiento crítico de la realidad con sus posibilidades <br> de participación, modificación y transformación atendiendo a la perspectiva proyectual en la formación de su propia sensibilidad y pensamiento.";
});

// SCROLL TO TOP BUTTON

const scrollTopButton = document.querySelector('.scrollTop');

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 500) {
        scrollTopButton.style.display = "block";
    }
    else {
        scrollTopButton.style.display = "none";
    }
}

function scrollToTop(){
    window.scrollTo(0, 0);
}

// ACORDEON PLAN DE ESTUDIO

let contadorPlan = [0, 0, 0, 0];
let contadorBoolPlan = [false, false, false, false];

$(document).ready(function() {
    $('.panel1, .panel2, .panel3, .panel4').hide();

    $('.acordeon1').on('click', function() {
        if (contadorBoolPlan[1] == false && contadorBoolPlan[2] == false && contadorBoolPlan[3] == false){
            $('.panel1').slideToggle();
            contadorPlan[0]++;
                console.log(contadorPlan[0]);
            if(contadorPlan[0] % 2 == 0){
                contadorBoolPlan[0] = false;
            }
            else {
                contadorBoolPlan[0] = true;
                }
            console.log(contadorBoolPlan[0]);
        }
        else {
            if(contadorBoolPlan[1] == true) {
                $('.panel2').hide();
                contadorPlan[1]++;
                contadorBoolPlan[1] = false;
            }

            if(contadorBoolPlan[2] == true) {
                $('.panel3').hide();
                contadorPlan[2]++;
                contadorBoolPlan[2] = false;
            }

            if(contadorBoolPlan[3] == true) {
                $('.panel4').hide();
                contadorPlan[3]++;
                contadorBoolPlan[3] = false;
            }

            $('.panel1').slideToggle();
            contadorBoolPlan[0] = true;
            contadorPlan[0]++;
        }
    });

    $('.acordeon2').on('click', function() {
        if (contadorBoolPlan[0] == false && contadorBoolPlan[2] == false && contadorBoolPlan[3] == false){
            $('.panel2').slideToggle();
            contadorPlan[1]++;
                console.log(contadorPlan[1]);
            if(contadorPlan[1] % 2 == 0){
                contadorBoolPlan[1] = false;
            }
            else {
                contadorBoolPlan[1] = true;
                }
            console.log(contadorBoolPlan[1]);
        }
        else {
            if(contadorBoolPlan[0] == true) {
                $('.panel1').hide();
                contadorPlan[0]++;
                contadorBoolPlan[0] = false;
            }

            if(contadorBoolPlan[2] == true) {
                $('.panel3').hide();
                contadorPlan[2]++;
                contadorBoolPlan[2] = false;
            }

            if(contadorBoolPlan[3] == true) {
                $('.panel4').hide();
                contadorPlan[3]++;
                contadorBoolPlan[3] = false;
            }

            $('.panel2').slideToggle();
            contadorBoolPlan[1] = true;
            contadorPlan[1]++;
        }
    });

    $('.acordeon3').on('click', function() {
        if (contadorBoolPlan[0] == false && contadorBoolPlan[1] == false && contadorBoolPlan[3] == false){
            $('.panel3').slideToggle();
            contadorPlan[2]++;
                console.log(contadorPlan[2]);
            if(contadorPlan[2] % 2 == 0){
                contadorBoolPlan[2] = false;
            }
            else {
                contadorBoolPlan[2] = true;
                }
            console.log(contadorBoolPlan[2]);
        }
        else {
            if(contadorBoolPlan[0] == true) {
                $('.panel1').hide();
                contadorPlan[0]++;
                contadorBoolPlan[0] = false;
            }

            if(contadorBoolPlan[1] == true) {
                $('.panel2').hide();
                contadorPlan[1]++;
                contadorBoolPlan[1] = false;
            }

            if(contadorBoolPlan[3] == true) {
                $('.panel4').hide();
                contadorPlan[3]++;
                contadorBoolPlan[3] = false;
            }

            $('.panel3').slideToggle();
            contadorBoolPlan[2] = true;
            contadorPlan[2]++;
        }
    });

    $('.acordeon4').on('click', function() {
        if (contadorBoolPlan[0] == false && contadorBoolPlan[1] == false && contadorBoolPlan[2] == false){
            $('.panel4').slideToggle();
            contadorPlan[3]++;
                console.log(contadorPlan[3]);
            if(contadorPlan[3] % 2 == 0){
                contadorBoolPlan[3] = false;
            }
            else {
                contadorBoolPlan[3] = true;
                }
            console.log(contadorBoolPlan[3]);
        }
        else {
            if(contadorBoolPlan[0] == true) {
                $('.panel1').hide();
                contadorPlan[0]++;
                contadorBoolPlan[0] = false;
            }

            if(contadorBoolPlan[1] == true) {
                $('.panel2').hide();
                contadorPlan[1]++;
                contadorBoolPlan[1] = false;
            }

            if(contadorBoolPlan[2] == true) {
                $('.panel3').hide();
                contadorPlan[2]++;
                contadorBoolPlan[2] = false;
            }

            $('.panel4').slideToggle();
            contadorBoolPlan[3] = true;
            contadorPlan[3]++;
        }
    });
});
