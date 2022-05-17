
function calcular() {    

    let nome = document.getElementById("inputNome").value;
    let valorHora = document.getElementById("inputValorHora").value;
    let horasTrab = document.getElementById("inputHorasTrab").value;
    
    let salario = valorHora * horasTrab;

    valorResultado.innerHTML = (`O pagamento para ${nome} deve ser de R$ ${salario.toFixed(2)}`);

}