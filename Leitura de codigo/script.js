document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlideIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
        });
    });

    showSlide(currentSlideIndex);
});


enviar.onclick = function enviarFeedback(){
    var campo = document.getElementsByClassName("azul");
    var enviar = document.getElementById("enviar");
    var preenchido = true;

    for (var i = 0; i < campo.length; i++) {
        if (campo[i].value.trim() === "") { 
            preenchido = false;
            break; 
        }
    }

    if (!preenchido) {
        alert("Preencha todos os campos corretamente 🥺");
        campo.preventDefault(); 
    } 
    
    else {
        alert("Feedback enviado com sucesso! 😎");
    }
};

document.getElementById("pgUp").onclick = function subirTela() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
