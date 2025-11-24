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

  test("teste com erro proposital", () => {
    expect(classificarAlerta(90)).toBe("Alto"); // Deveria ser "Crítico"
});
});