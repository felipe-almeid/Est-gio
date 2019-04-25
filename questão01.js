const cf = 10000.00 /*custo de fábrica*/
const pd= 0.28  /*percentual do distribuidor*/
const pi= 0.45  /*percentual de impostos*/

const custofinal=cf+(cf*pd)+(cf*pi )
console.log(custofinal.toFixed(2))