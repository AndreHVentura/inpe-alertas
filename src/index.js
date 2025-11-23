const { classificarAlerta } = require('./alerta');
const { enviarNotificacao } = require('./notificacao');

console.log("Aplicativo de monitoramento de Eventos Climáticos - INPE");

// Exemplo de uso
const nivelAlerta = 75;
const classificacao = classificarAlerta(nivelAlerta);
const notificacao = enviarNotificacao(classificacao);

console.log(notificacao);