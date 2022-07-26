const nome = prompt("Qal é o seu nome?")
const cor = prompt("Qual a sua cor favorita?")
const fraseCor = `A cor favorita do ${nome} é ${cor}`

console.log("A cor favorita do " + nome + " é " + cor);

console.log(fraseCor)

console.log(`Nome: ${nome} \nCor favorita: ${cor}`);
console.log(`Nome: ${nome} \nCor favorita: ${cor}`);

console.log(`Nome: ${nome.toUpperCase()} \nCor: ${cor}`);
console.log(`Nome: ${nome.length} \nCor: ${cor}`);
console.log(`Nome: ${nome.toLowerCase()} \nCor: ${cor.toUpperCase()}`);
console.log(`Nome: ${nome.toUpperCase()} \nCor: ${cor.length}`);

const nome2 = prompt("Qual o seu nome?")
const email = prompt("Ensira seu Email aqui")
console.log(`O email ${email.toLowerCase()} foi cadastrado com sucesso. Seja bem vindo ${nome}`);
console.log(nome.length);

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}`.replaceAll(`r`,`l`));

