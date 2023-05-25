let alturaCentimetros = 176;
let alturaMetros = 1.76;
let pesoKG = 62.560;
let alturaRedondeada = alturaMetros.toFixed(1);
let pesoRedondeado = pesoKG.toPrecision(1);
let maxValor = Number.MAX_VALUE;

console.log(parseInt(alturaCentimetros));
console.log(parseFloat(alturaMetros));
console.log(parseFloat(pesoKG).toFixed(3));
console.log(alturaRedondeada);
console.log(parseFloat(pesoRedondeado));
console.log(maxValor + 1 === maxValor);