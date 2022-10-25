let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let resposta = "";
let impar = 0;
let menorNumero = numbers[0];
let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !==0){
        impar += 1;
    }
    
    soma += (numbers[index]);
    media = soma / numbers.length;

    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }

    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index]
    }
   
}
    if (impar ===0){
        console.log('nenhum valor ímpar encontrado');
    }else{
        console.log(impar);
    }

    if(media > 20){
    resposta = "maior que 20";
    }else {
    resposta = "menor que 20";
    }


console.log(soma, media);
console.log(resposta);
console.log(maiorNumero);
console.log(menorNumero);

for(let index2 = 1; index2 < 26; index2 += 1){

divisao = index2 / 2;
console.log(index2, divisao);
}
