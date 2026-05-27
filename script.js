/* ESSE DIABO VAI BUSCAR ELEMENTOS NO HTML */

const loginBtn=document.getElementById("loginBtn");

const drawer=document.getElementById("drawer");

const closeBtn=document.getElementById("closeBtn");

const email = document.getElementById("email");

const password = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const entrarBtn = document.querySelector(".entrar");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


/* ESSE SATANAS AQUI VAI ESPERAR AÇÕES DO USUARIO */
loginBtn.addEventListener("click",()=>{

drawer.classList.add("active");

});

/*adiciona uma classe CSS */

closeBtn.addEventListener("click",()=>{

/* E REMOVE AS MERDA DE CLASSE */
drawer.classList.remove("active");

});

   // validação btn entrar do drawer
entrarBtn.addEventListener("click", () => {

  let isValid = true;

  // limpa os campos de erro e sucesso no início

  email.classList.remove("error", "success");

  password.classList.remove("error", "success");


  // validação email se campo estiver vazio

  if (email.value.trim() === "") {

    email.classList.add("error");

    isValid = false;

  }

  // usa o padrão regex para validar email

  else if (!regex.test(email.value)) {

    emailError.textContent = "Digite um email válido";

    email.classList.add("error");

    isValid = false;

  }

  else {

    email.classList.add("success");

  }


  // valida campo de senha se valor for vazio

  if (password.value.trim() === "") {

    password.classList.add("error");

    isValid = false;

  }

  // limite de caracteres

  else if (password.value.length < 4 || password.value.length > 8 ) {

    passwordError.textContent = "Mínimo de 4 caracteres e máximo 8"

    password.classList.add("error");

    isValid = false;

  }

  else {

    password.classList.add("success");

  }

});

// reseta o estilo quando clica fora dos inputs

email.addEventListener("blur", () => {

  if (email.value.trim() === "") {

    email.classList.remove("error", "success");

  }

});

password.addEventListener("blur", () => {

  if (password.value.trim() === "") {

    password.classList.remove("error", "success");


  }

});