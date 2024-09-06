function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  // se campoPesquisa for uma strign sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar nome de um atleta ou esporte</p>";
    return;
  }
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  //para cada dado dentro da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se o titulo includes campoPesquisa então execute...
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    )
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href="${dado.link}"
            >Mais Informações</a
          >
        </div>
        `;
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }
  section.innerHTML = resultados;
}
