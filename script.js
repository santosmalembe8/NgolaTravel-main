const usuarioBtn = document.getElementById("usuarioBtn");
const empresaBtn = document.getElementById("empresaBtn");

const formUsuario = document.getElementById("formUsuario");
const formEmpresa = document.getElementById("formEmpresa");

usuarioBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Active tab
    usuarioBtn.classList.add("active");
    empresaBtn.classList.remove("active");

    // Mostrar formulário usuário
    formUsuario.classList.add("active");
    formEmpresa.classList.remove("active");
});

empresaBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Active tab
    empresaBtn.classList.add("active");
    usuarioBtn.classList.remove("active");

    // Mostrar formulário empresa
    formEmpresa.classList.add("active");
    formUsuario.classList.remove("active");
});