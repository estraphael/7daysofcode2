function showMessage1() {
    document.write("Olá " + name + ", você tem " + age + " anos e já está aprendendo " + language + "!");
    document.write("<br><br>");
  }
  
  var name = prompt("Qual é o seu nome?");
  var age = parseInt(prompt("Quantos anos você tem?"));
  var language = prompt("Qual linguagem de programação você está estudando?");
  
  showMessage1();
  
  function showMessage2() {
    if (finalQuestion == 1) {
      document.write("Muito bom! Continue estudando e você terá muito sucesso.");
    } else {
      document.write("Ahh que pena... Já tentou aprender outras linguagens?");
    }
  }
  
  var finalQuestion = parseInt(prompt("Você gosta de estudar " + language + "? Responda com o número 1 para SIM ou 2 para NÃO.")
  );
  
  showMessage2();