const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalRegister = document.querySelector("#modal-register");
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelRegister = document.querySelector("#btn-cancel-register");
const btnLoginOpen = document.querySelector("#btn-login-open");
const inputEmail = document.querySelector("#email");
const resultado = document.querySelector("#resultado");

const pegar_valor = (valor) => {
  resultado.innerHTML = `
    <div class="valor">
      <h1>${valor}</h1>
    </div>
  `
}

function soma(num01, num02) {
  const somar = num01 + num02;
  console.log(somar);
}

soma(5, 2);

// arrow function
const multiplicar = (num01, num02) => {
  return num01 * num02;
};

const dividir = (num01, num02) => {
  return num01 / num02;
};

console.log(multiplicar(5, 8));
console.log(dividir(5, 2));

// addEventListener => Escuta o evento de click e executa a função
btnLogin.addEventListener("click", (e) => {
  modalLogin.classList.remove("hide-modal");
  modalLogin.classList.add("show-modal");
});

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.remove("hide-modal");
  modalRegister.classList.add("show-modal");
});

btnCancelLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modalLogin.classList.remove("show-modal");
  modalLogin.classList.add("hide-modal");
  inputEmail.value = "";
  resultado.innerHTML = "";
  inputEmail.style.borderBottom = "0.5rem solid rgb(255, 255, 255)";
});

btnCancelRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.remove("show-modal");
  modalRegister.classList.add("hide-modal");
});

// inputEmail.addEventListener("input", () => {
//   resultado.innerHTML = inputEmail.value;
// });

inputEmail.addEventListener("focus", () => {
  inputEmail.style.borderBottom = "0.5rem solid rgb(46, 21, 138)";
});

btnLoginOpen.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inputEmail.value;
  pegar_valor(email);
});

inputEmail.addEventListener("focusout", () => {
  inputEmail.style.borderBottom = "0.5rem solid rgb(255, 255, 255)";
})

