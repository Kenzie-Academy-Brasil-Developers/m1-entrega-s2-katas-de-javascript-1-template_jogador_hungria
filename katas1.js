//                             //  EXE  : 01

function cubicSquare() {
      
    let valor_ao_cubo =" "
    for (a = 1; a <= 10; a++ ){

    valor_ao_cubo += a *a *a + " "
    };
    return valor_ao_cubo;
};
console.log(cubicSquare());

//                              //  EXE  : 02

function divisiblesFor(n1_2, n2_2,){

    n1_2 =  parseInt(prompt("Numero limitador "))
    n2_2 =  parseInt(prompt("Numero Divisor"))
    let n1 = n1_2 
    let n2 = n2_2 
    let resultado = ""
    for(n = 1 ; n <= n1; n ++){

        if(n % n2 == 0 ){
            resultado += n + ","
        }
    }
    return resultado
}
let n1_2
let n2_2
console.log(divisiblesFor(n1_2, n2_2))



//                                  //  EXE  : 03



function stringElement(stringContagem, number){

    stringContagem = prompt("Digite uma frase");
    number = parseInt(prompt("Digite a poosição a ser procurada"));
    let letraFormatada = "";
    resultado = "";

  for(n1 = 0 ; n1 < number ; n1++){
         
     if (number  >= stringContagem.length ){
        console.log("Posição Invalida repita a operação");

        }else if(n1 <= number){
            letraFormatada = stringContagem;
            resultado = `Retorna "${letraFormatada[number].toUpperCase()}" pois esta é a letra da posição ${number}`;   
        };
    };
    return resultado;
};

let stringContagem ;
let number ;
console.log(stringElement(stringContagem, number));



//                                   //  EXE  : 04
                        


function stringSlicer(string_4 , number4){

     string_4 = prompt("Digite uma frase");
     number4 = Math.ceil(prompt("Digite um limitador"));
     let stringFormatada = "";
     for(n = 0; n < number4 ; n++){
        if(n < string_4.length){
            stringFormatada += string_4[n];
        };
    };
    return stringFormatada  ; 
};
let string_4;
let number4;
console.log(stringSlicer(string_4 , number));



//                                   //  EXE  : 05


function stringRest(string_5, number_5){
    string_5 = prompt("Digite uma Palavra");
    number_5 = parseInt(prompt("Digite a posição inicial."));
    let juntando ="";
    
    for (number_5 ;number_5 < string_5.length ; number_5++){
        juntando += string_5[number_5];
    }  ;      
    return juntando;
};
let string_5 ;
let number_5;
console.log(stringRest(string_5, number_5));



//                                      //  EXE  : 06



function countVowels(string_6){
    
    string_6 = prompt("Digite uma frase");
    let refatorando = "";

    for(n = 0 ; n < string_6.length; n++){

        if(string_6[n] == "a" || string_6[n]  == "e" || string_6[n]  == "i" || string_6[n]  == "o" || string_6[n]  == "u"){
          refatorando += string_6[n] ;
        };
    };
    return refatorando;
}
let string_6;
console.log(countVowels(string_6));



//                                            //  EXE  : 07



function countTextOccurrences(string_7_1, string_7_2){
    string_7_1 = prompt("Digite uma frase");
    string_7_2 = prompt("Digite a letra que procura ");
    let procurando ="";
    let achou = "";
    let saida ="";
    for(n = 0 ; n < string_7_1.length; n++){
       if(string_7_1[n] == string_7_2 ){
        procurando = string_7_1[n];
        achou += procurando.toUpperCase();
        saida = `Retorna ${achou.length}, pois a letra "${string_7_2.toUpperCase()}" apareceu ${achou.length} vezes.`;
        };
    };
    return saida;
};
let string_7_1;
let string_7_2;
console.log(countTextOccurrences(string_7_1, string_7_2));



//                                           //  EXE  : 08


function textBackwards(inverter){
    inverter = prompt("escreva uma frase pra inverter");
    let invertido = "";

    for(n = inverter.length ; n >= 0; n-- ){
       if(inverter.length > n ){
       invertido += inverter[n];
       };
    };
    return invertido;
};

let inverter;
console.log(textBackwards(inverter));


//                                           //  EXE : 09

function removeBlank(retira_letra){

    retira_letra = prompt("Digite uma frase");
    let letra_refatorada ="";

    for(n = 0; n < retira_letra.length; n++){
        if(retira_letra[n] !== " "){
            letra_refatorada += retira_letra [n];    
        }
    }
    return letra_refatorada;
}
let retira_letra;
console.log(removeBlank(retira_letra));

//                                           //  EXE :  10

function encryptText(string_10){
string_10 = "Uma frase ultra secreta que precisa ser criptografada";
          
let criptografada = "";
    for (n = 0 ; n < string_10.length; n++){
        if(string_10[n] === "a"){
           criptografada += "x";
        }else if (string_10[n] === "A"){
            criptografada += "X";
        }else if (string_10[n] === "e"){
            criptografada += "y";
        }else if (string_10[n] === "E"){
            criptografada += "Y";
        }else if (string_10[n] === "i"){
            criptografada += "w";
        }else if (string_10[n] === "I"){
            criptografada += "W";
        }else if (string_10[n] === "o"){
            criptografada += "k";
        }else if (string_10[n] === "O"){
            criptografada =+ "K";
        }else if (string_10[n] === "u"){
            criptografada += "z";
        }else if (string_10[n] === "U"){
            criptografada += "Z";
        }else if(criptografada != "a", "i", "o", "u", "A" , "E" , "I", "O", "U"){
            criptografada += string_10[n];
        };
    };
    return criptografada;

};
let string_10;
console.log(encryptText(string_10));
