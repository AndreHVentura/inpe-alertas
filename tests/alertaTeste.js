const { classificarAlerta } = require('../src/alerta');

describe('Classificação de Alertas', () => {
  test("alerta alto", () => {
    expect(classificarAlerta(70)).toBe("Alto");
  });

  test("alerta critico", () => {
    expect(classificarAlerta(90)).toBe("Critico");
  });

  test("alerta moderado", () => {
    expect(classificarAlerta(60)).toBe("Moderado");
  });

  test("alerta baixo", () => {
    expect(classificarAlerta(30)).toBe("Baixo");
  });

  // Exercício 3 - Teste com erro (proposital)
  test("teste com erro proposital - deve falhar", () => {
    // Este teste vai falhar propositalmente
    expect(classificarAlerta(90)).toBe("Alto"); // Erro: deveria ser "Critico"
  });
});