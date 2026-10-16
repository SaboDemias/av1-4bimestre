const formulario = document.querySelector("#formulario");
const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade")
const inputResultado = document.querySelector("#resultado")

formulario.addEventListener("submit", function (event){
    event.preventDefault();

    const nome = inputNome.value.trim();
    const preco = Number(inputServico.value);
    const quantidadeString = inputQuantidade,value.trim();
    const quantidade = Number(quantidadeString);

    resultado.classList.remove(
    "d-none"
    "alert-info"
    "alert-danger"
    "alert-sucess"
 
)

  if(nome === ""||
     quantidadeString === ""||
    !Number.isInteger(quantidade))
     {
    resultdo.classList.add("alert-warning");
  resultado.textContent = "prencha todos os campos!";
  return;
     }

     const total = calcularTotal(preco, quantidade);

     resultado.textContent = `Olá ${nome} o orçamento será de ${total.toFixed(2)}`;
     
     resultado.classList.add("alert-sucess");
    });

    function calcularTotal(preco, quantidade) {
        return preco * quantidade;
    }

  
