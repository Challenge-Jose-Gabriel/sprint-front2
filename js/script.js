// Botão da página inicial
document.getElementById("agendarBtn").addEventListener("click", function() {
    alert("Redirecionando para a página de agendamento de consulta...");
    window.location.href = "agendamento.html";
});

// Formulário de agendamento
document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const medico = document.getElementById("medico").value;

  if (!nome || !data || !hora || !medico) {
    alert("Por favor, preencha todos os campos antes de agendar sua consulta.");
    return;
  }

  alert(`Consulta agendada com sucesso!\nNome: ${nome}\nData: ${data}\nHorário: ${hora}\nMédico: ${medico}`);

  this.reset();
});

// Consultas
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona funcionalidade para cancelar consultas
  const botoesCancelar = document.querySelectorAll(".cancelar");

  botoesCancelar.forEach(botao => {
    botao.addEventListener("click", function () {
      const linha = botao.parentElement.parentElement;
      linha.remove();
      alert("Consulta cancelada com sucesso!");
    });
  });
});