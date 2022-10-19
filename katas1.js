/* agradeço o feedBack Mikhail Hiroaki
arrumei os pontos que pediu pra arrumar 
na logica, alguns pontos como as 
variaveis fora das funções e outros detalhes
irei tratar apartir dos proximos exercícios.
*/ 




function iniciar_tudo(){

                            //  EXE  : 01

function cubicSquare(){
      
    let valor_ao_cubo =" "

    for (a = 1; a <= 10; a++ ){
         valor_ao_cubo += a * a * a + ","
    };
    return "Retorna : " + valor_ao_cubo;

};
console.log(`${cubicSquare()}`);


                              //  EXE  : 02


function divisiblesFor(n1, n2,){

    
    let resultado = ""
    for(n = 1 ; n <= n1; n ++){

        if(n % n2 == 0 ){
            resultado += n + ","
        }
    }
    return "Retorna : " + resultado
}

console.log(divisiblesFor(100, 10))



                                   EXE  : 03


function stringElement(stringContagem, number){

    let letra = ""
    for(n = 0; n < stringContagem.length; n++){
        

        if( n == number){

             letra += stringContagem[n]
             return `Retorna : " ${letra.toUpperCase()} " pois esta é a letra da posição " ${n} "`      
        };
       
    };
    
};

console.log(stringElement( "algoritmos" , 7))



                                   //  EXE  : 04
                        

function stringSlicer(string , number){

     let stringFormatada = "";
     for(n = 0; n < number ; n++){
        if(n < string.length){
            stringFormatada += string[n];
        };
    };
    return "Retorna : " + stringFormatada + "  pois são os " + stringFormatada.length + " primeiros caracteres da string" ; 
};

console.log(stringSlicer("ALGORÌTMOS" , 4));



                                   //  EXE  : 05


function stringRest(string_5, number_5){
    
    let juntando ="";
    
    for (number_5 ;number_5 < string_5.length ; number_5++){
        juntando += string_5[number_5];
    }  ;      
    return`Retorna : "${juntando}" pois são os caracteres à partir da posição 2`;
};

console.log(stringRest("ALGORITMOS", 2));



                                      //  EXE  : 06



function countVowels(string_6){

    let refatorando = "";

    for(n = 0 ; n < string_6.length; n++){

        if(string_6[n] == "a" || string_6[n]  == "e" || string_6[n]  == "i" || string_6[n]  == "o" || string_6[n]  == "u"){
          refatorando += string_6[n] ;
        }else if(string_6[n] == "A" || string_6[n]  == "E" || string_6[n]  == "I" || string_6[n]  == "O" || string_6[n]  == "U"){
          refatorando +=  string_6[n] ;
        };
    }; 
    return 'Retorna : "' + refatorando.length + '"  pois existem  "'+ refatorando.length + '" vogais na palavra "abacaxi"';
}

console.log(countVowels("abacaxi"));



                                            //  EXE  : 07


function countTextOccurrences(string1, string2){
    
    let procurando ="";
    let achou = "";
    for(n = 0 ; n < string1.length; n++){
       if(string1[n] == string2 ){
        procurando = string1[n];
        achou += procurando.toUpperCase();
        };
    };
    return `Retorna : "${achou.length}", pois a letra "${string2.toUpperCase()}" apareceu "${achou.length}" vezes.`;
};
console.log(countTextOccurrences("abacaxi", "a"));



                                           //  EXE  : 08


function textBackwards(inverter){
    
    let invertido = "";

    for(n = inverter.length ; n >= 0; n-- ){
       if(inverter.length > n ){
       invertido += inverter[n];
        };
    };
    return 'Retorna : "' + invertido + '" pois é o contrário de" abacaxi".' 
};

console.log(textBackwards("abacaxi"));


                                             EXE : 09


function removeBlank(retira_letra){

    let letra_refatorada ="";;

    for(n = 0; n < retira_letra.length; n++){
        if(retira_letra[n] !== " "){
            letra_refatorada += retira_letra [n];    
        }
    }
    return "Retorna : " + letra_refatorada;
}

console.log(removeBlank("Não ficará   espaços em branco"));


                                          //  EXE :  10


function encryptText(string_10){
          
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
        }else{
            criptografada += string_10[n]; 
        };
    };
    return "Retorna : " + criptografada;

};
console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"));
};
