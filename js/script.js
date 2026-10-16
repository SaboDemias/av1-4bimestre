const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelectot("formulario");

formulario.addEventListener("submit", function (event) {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value.trim());
  
  resultado.classList.remove{
    "d-none"
    "alert-info"
    "alert-danger"
    "alert-sucess"
    "alert-warning"
  }

  if(nome === ""|| inputIdade === ""){
    resultdo.classList.add("alert-warning");
  resultado.textContent = "prencha todos os campos!";
  return;
  }
  if (idade >= 18) {
  
    resultado.ClassList.add("alert-sucess");
    resultado.textContent = `Olá, ${nome}! Você é maior de idade.`;
  } else {
    resultado.ClassList.add("alert-danger")
    resultado.textContent = `Olá, ${nome}! Você é menor de idade.`;
  }
});

funtion verificaridade(idade){
  if(idade >= 18)
    return "voce e maior de idade"
  } 