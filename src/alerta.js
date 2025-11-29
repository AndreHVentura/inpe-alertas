function classificarAlerta(valor) {
  if (valor >= 90) return "Critico";
  if (valor >= 70) return "Alto";
  if (valor >= 50) return "Moderado";
  return "Baixo";
}

module.exports = { classificarAlerta };