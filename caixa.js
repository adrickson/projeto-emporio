// RECEBIMENTO DE VALORES EM FORMATO DE STRING

let txt_itaipava = document.getElementById('itaipava')
let txt_brahma = document.getElementById('brahma')
let txt_devassa = document.getElementById('devassa')
let txt_amstel = document.getElementById('amstel')

let txt_coca = document.getElementById('coca-cola')
let txt_guarana = document.getElementById('guarana')
let txt_pepsi = document.getElementById('pepsi')
let txt_doly = document.getElementById('doly')

let txt_dinheiro_recebido = document.getElementById('dinheiro_cliente')

let valor_tot = document.getElementById('valor-tot') // VARIÁVEL DE RETORNO (RESPOSTA)
let troco = document.getElementById('troco')  // VARIÁVEL DE RETORNO (RESPOSTA)


// CONVERSÃO DOS VALORES EM STRING PARA NÚMEROS

let itaipava = Number(txt_itaipava.value)
let brahma = Number(txt_brahma.value)
let devassa = Number(txt_devassa.value)
let amstel = Number(txt_amstel.value)

let coca_cola = Number(txt_coca.value)
let guarana = Number(txt_guarana.value)
let pepsi = Number(txt_pepsi.value)
let doly = Number(txt_doly.value)

let dinheiro_recebido = Number(txt_dinheiro_recebido.value)
