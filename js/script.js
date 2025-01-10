document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("click", () => {
    const name = skill.getAttribute("data-name");
    let span = skill.querySelector("span");

    // Alterna a visibilidade do nome
    if (!span) {
      span = document.createElement("span");
      span.textContent = name;
      skill.appendChild(span);
      span.style.display = "block";
    } else {
      span.style.display = span.style.display === "block" ? "none" : "block";
    }

    // Alterna a classe 'clicked' para adicionar/remover a borda
    skill.classList.toggle("clicked");
  });
});
