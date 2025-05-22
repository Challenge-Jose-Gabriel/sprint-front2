// Botão da página inicial
document.addEventListener("DOMContentLoaded", function () {
  const agendarBtn = document.getElementById("agendarBtn");

  agendarBtn.addEventListener("click", function () {
      window.location.href = "html/agendamento.html"; 
  });
})

// Formulário de agendamento
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("agendamentoForm").addEventListener("submit", function (event) {
      event.preventDefault(); 

      const nome = document.getElementById("nome").value.trim();
      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;
      const medico = document.getElementById("medico").value;

      if (nome === "" || data === "" || hora === "" || medico === "") {
          alert("Por favor, preencha todos os campos corretamente antes de agendar sua consulta.");
          return;
      }

      alert(`✅ Consulta agendada com sucesso!\n\nNome: ${nome}\nData: ${data}\nHorário: ${hora}\nMédico: ${medico}`);
      this.reset();
  });
});

// Validação do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contatoForm").addEventListener("submit", function (event) {
      event.preventDefault(); 
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
          alert("Por favor, preencha todos os campos antes de enviar.");
          return;
      }


      alert(`✅ Mensagem enviada com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

      this.reset();
  });
});