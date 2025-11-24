const { classificarAlerta } = require('../src/alerta');
const { enviarNotificacao } = require('../src/notificacao');

test("classificação + notificação", () => {
  const alerta = classificarAlerta(90);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe("Notificação enviada: Critico");
});

