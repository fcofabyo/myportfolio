document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("click", () => {
    const name = skill.getAttribute("data-name");
    let span = skill.querySelector("span");

    if (!span) {
      // Cria o elemento de texto
      span = document.createElement("span");
      span.textContent = name;
      skill.appendChild(span);
      span.style.display = "block";
    } else {
      // Alterna a visibilidade do texto
      span.style.display = span.style.display === "block" ? "none" : "block";
    }
  });
});
