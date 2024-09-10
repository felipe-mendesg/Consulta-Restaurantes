function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada

  if (campoPesquisa == ""){
    section.innerHTML = "Nada foi encontrado. Digite o nome de um Restaurante ou Categoria"
      return

  }
    
  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let nomeRestaurante = "";
  let descricao =  "";
  let tags = "";

  // Itera sobre cada dado (restaurante) na lista de dados
  for (let dado of dados) {
    nomeRestaurante = dado.nome_do_restaurante.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase() 

    //se no dado nome restaurante includes campoPesquisa
    if (nomeRestaurante.includes(campoPesquisa) || 
    descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento

      resultados += `
          <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.nome_do_restaurante}
                </a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao}
            </p>
            <a href=${dado.link_insta} target="_blank">Link Instagram</a>
          </div>
      `;
    }
  }
  if (!resultados){
    resultados = "<p>Nenhum Restaurante Encontrado!</p>"

  

  }

 

  // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}
