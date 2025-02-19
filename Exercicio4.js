const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite o ano: ", (n1) => {
    
    const n2 = parseInt(n1) / 4
    console.log(`Resultado: ${n2}`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });

