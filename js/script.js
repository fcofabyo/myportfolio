// Funcionalidade para as habilidades
document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("click", () => {
    const name = skill.getAttribute("data-name");
    let span = skill.querySelector("span");

    if (!span) {
      span = document.createElement("span");
      span.textContent = name;
      skill.appendChild(span);
      span.style.display = "block";
    } else {
      span.style.display = span.style.display === "block" ? "none" : "block";
    }

    skill.classList.toggle("clicked");
  });
});

// Adiciona evento aos itens de experiência
document.querySelectorAll(".experience-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Remove o estilo 'active' de todos os itens
    document.querySelectorAll(".experience-item").forEach((el) => {
      el.classList.remove("active");
    });

    // Adiciona o estilo 'active' apenas ao item clicado
    item.classList.add("active");

    // Exibe os detalhes correspondentes ao item clicado
    const id = item.getAttribute("data-target");
    document.querySelectorAll(".experience-details").forEach((detail) => {
      detail.style.display = "none"; // Oculta todos os detalhes
    });
    document.getElementById(id).style.display = "block"; // Exibe o detalhe selecionado
  });
});

// Seleciona automaticamente o Atacadão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const atacadaoItem = document.querySelector(".experience-item.atacadao");
  if (atacadaoItem) {
    atacadaoItem.classList.add("active"); // Garante que o Atacadão esteja ativo
    const atacadaoDetail = document.getElementById("atacadao-detail");
    if (atacadaoDetail) {
      atacadaoDetail.style.display = "block"; // Exibe o conteúdo do Atacadão
    }
  }
});
