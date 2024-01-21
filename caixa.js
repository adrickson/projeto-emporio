// RECEBIMENTO DE VALORES EM FORMATO DE STRING (CERVEJAS PEQUENAS E REFRI 2L)

let txt_itaipava = document.getElementById('itaipava')
let txt_brahma = document.getElementById('brahma')
let txt_devassa = document.getElementById('devassa')
let txt_amstel = document.getElementById('amstel')
let txt_heineken = document.getElementById('heineken')
let txt_stella = document.getElementById('stella')

let txt_coca = document.getElementById('coca-cola')
let txt_guarana = document.getElementById('guarana')
let txt_pepsi = document.getElementById('pepsi')
let txt_doly = document.getElementById('doly')
let txt_kuat = document.getElementById('kuat')
let txt_soda = document.getElementById('soda')

// RECEBIMENTO DE VALORES EM FORMATO DE STRING (CERVEJAS GRANDES E REFRI 1L)

let txt_itaipava_g = document.getElementById('itaipava-g')
let txt_brahma_g = document.getElementById('brahma-g')
let txt_devassa_g = document.getElementById('devassa-g')
let txt_amstel_g = document.getElementById('amstel-g')
let txt_heineken_g = document.getElementById('heineken-g')
let txt_stella_g = document.getElementById('stella-g')

let txt_coca_p = document.getElementById('coca-cola-p')
let txt_guarana_p = document.getElementById('guarana-p')
let txt_pepsi_p = document.getElementById('pepsi-p')
let txt_doly_p = document.getElementById('doly-p')
let txt_kuat_p = document.getElementById('kuat-p')
let txt_soda_p = document.getElementById('soda-p')



let txt_dinheiro_recebido = document.getElementById('dinheiro_cliente') // DINHEIRO CLIENTE (STRING)

let valor_tot = document.getElementById('valor-tot') // VARIÁVEL DE RETORNO (RESPOSTA)
let troco = document.getElementById('troco')  // VARIÁVEL DE RETORNO (RESPOSTA)


// CONVERSÃO DOS VALORES EM STRING PARA NÚMEROS (CERVEJAS PEQUENAS E REFRI 2L)

let itaipava = Number(txt_itaipava.value)
let brahma = Number(txt_brahma.value)
let devassa = Number(txt_devassa.value)
let amstel = Number(txt_amstel.value)
let heineken = Number(txt_heineken.value)
let stella = Number(txt_stella.value)

let coca_cola = Number(txt_coca.value)
let guarana = Number(txt_guarana.value)
let pepsi = Number(txt_pepsi.value)
let doly = Number(txt_doly.value)
let kuat = Number(txt_kuat.value)
let soda = Number(txt_soda.value)

// CONVERSÃO DOS VALORES EM STRING PARA NÚMEROS (CERVEJAS GRANDES E REFRI 1L)

let itaipava_grande = Number(txt_itaipava_g.value)
let brahma_grande = Number(txt_brahma_g.value)
let devassa_grande = Number(txt_devassa_g.value)
let amstel_grande = Number(txt_amstel_g.value)
let heineken_grande = Number(txt_heineken_g.value)
let stella_grande = Number(txt_stella_g.value)

let coca_peq = Number(txt_coca_p.value)
let guarana_peq = Number(txt_guarana_p.value)
let pepsi_peq = Number(txt_pepsi_p.value)
let doly_peq = Number(txt_doly_p.value)
let kuat_peq = Number(txt_kuat_p.value)
let soda_peq = Number(txt_soda_p.value)


let dinheiro_recebido = Number(txt_dinheiro_recebido.value)

function caixa() {

    if(txt_dinheiro_recebido.length == 0 || dinheiro_recebido == 0) {
        troco.innerHTML = `Sem troco`
    }

}
