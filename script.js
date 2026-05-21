/* ESSE DIABO VAI BUSCAR ELEMENTOS NO HTML */

const loginBtn=document.getElementById("loginBtn");

const drawer=document.getElementById("drawer");

const closeBtn=document.getElementById("closeBtn");

/* ESSE SATANAS AQUI VAI ESPERAR AÇÕES DO USUARIO */
loginBtn.addEventListener("click",()=>{

drawer.classList.add("active");

});

/*adiciona uma classe CSS */

closeBtn.addEventListener("click",()=>{

/* E REMOVE AS MERDA DE CLASSE */
drawer.classList.remove("active");

});