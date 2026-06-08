function abrirPagina(url){
    window.open(url, "_blank");
}

document.querySelector("form")?.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
});
function abrirPagina(url){
    window.open(url,"_blank");
}

const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
            item.classList.add("reveal");
        }

    });

});