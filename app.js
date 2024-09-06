function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Exibe uma mensagem informando que nada foi encontrado
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item da lista de dados
    for (let dado of dados) {
      // Converte o título, descrição e tags para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para exibir o resultado da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }