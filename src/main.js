
import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="container">
    <h1>Projeto ONG</h1>
    <h2>Verificação da API</h2>

    <p id="status">Verificando conexão...</p>
    <p id="data"></p>
  </main>
`;

async function verificarAPI() {
  const status = document.querySelector("#status");
  const data = document.querySelector("#data");

  try {
    const resposta = await fetch("/api/health");
    const resultado = await resposta.json();

    status.textContent = "Status da API: " + resultado.status;
    data.textContent = "Data e hora: " + resultado.data;
  } catch (erro) {
    status.textContent = "Erro ao conectar com a API.";
    console.error(erro);
  }
}

verificarAPI();
