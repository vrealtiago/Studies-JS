var pacientes = document.querySelectorAll(".paciente");
var tabelaPacientes = document.querySelectorAll("tr");
for (var i = 1; i < tabelaPacientes.length; i++) {
  var paciente = tabelaPacientes[i]

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var imc = peso / (altura * altura);
  var tdImc = paciente.querySelector(".info-imc");

  tdImc.textContent = calcularImc(peso,altura);
  if(!isNaN(tdImc)){
    paciente.classList.add("pacineteInvalido");
  }

}

function calcularImc(peso, altura){
  var imc = 0;
  if (peso <= 0 || peso >= 500 || isNaN(peso)) {
    imc = "Peso invalido";
    return imc;
  } else if (altura <= 0 || altura >= 3 || isNaN(altura)) {
    imc = "Altura invalida";
    return imc;
  } else {
    imc = peso / (altura * altura);
    if(isNaN(imc)){
      imc = "Erro ao caclcular IMC";
      return imc;
    }
    return imc.toFixed(2);
  }
}
