"use strict";
// Funcionalidade para as habilidades
document.querySelectorAll(".skill").forEach((skill) => {
    const htmlElementSkill = skill; // Cast explícito para HTMLElement
    htmlElementSkill.addEventListener("click", () => {
        const name = htmlElementSkill.getAttribute("data-name");
        let span = htmlElementSkill.querySelector("span");
        if (!span) {
            span = document.createElement("span");
            span.textContent = name;
            htmlElementSkill.appendChild(span);
            span.style.display = "block";
        }
        else {
            span.style.display = span.style.display === "block" ? "none" : "block";
        }
        htmlElementSkill.classList.toggle("clicked");
    });
});
// Adiciona evento aos itens de experiência
document.querySelectorAll(".experience-item").forEach((item) => {
    const htmlElementItem = item; // Cast explícito para HTMLElement
    htmlElementItem.addEventListener("click", () => {
        // Remove o estilo 'active' de todos os itens
        document.querySelectorAll(".experience-item").forEach((el) => {
            const htmlElementEl = el; // Cast explícito para HTMLElement
            htmlElementEl.classList.remove("active");
        });
        // Adiciona o estilo 'active' apenas ao item clicado
        htmlElementItem.classList.add("active");
        // Exibe os detalhes correspondentes ao item clicado
        const id = htmlElementItem.getAttribute("data-target");
        document.querySelectorAll(".experience-details").forEach((detail) => {
            const htmlElementDetail = detail; // Cast explícito para HTMLElement
            htmlElementDetail.style.display = "none"; // Oculta todos os detalhes
        });
        document.getElementById(id).style.display = "block"; // Exibe o detalhe selecionado
    });
});
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
