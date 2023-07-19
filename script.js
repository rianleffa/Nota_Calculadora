function validarNota(elemento) {
    var valor = parseFloat(elemento.value);
    var min = parseFloat(elemento.min);
    var max = parseFloat(elemento.max);
  }
  
  function calcularNotaFinal() {
    var ap1 = parseFloat(document.getElementById("ap1").value);
    var ap2 = parseFloat(document.getElementById("ap2").value);
    var as = parseFloat(document.getElementById("as").value);
  
    if (isNaN(ap1) || isNaN(ap2) || isNaN(as)) {
      alert("Preencha todas as notas corretamente.");
      return;
    }
  
    var notaFinal = ap1 + ap2 + as;
    var resultado = "Nota " + notaFinal.toFixed(1) + ". ";
    
    if (notaFinal >= 6) {
      resultado += "Aprovado. Parabéns!";
    } else {
      resultado += "Reprovado. Reforce seus estudos para realização da AF.";
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  