function Imprimir1al100(){
    /*Primer segmento
        Valores Iniciales a las variable en ese segmento
        Segundo segmento
        Condicion o condiciones agrupadas con operadores 
        logicos
        Tercer segmento
        Operaciones de aumento o disminucion
    */
   for(i=1;i<=100;i++){ //i=i+2
        console.log(i);
   }
}
/*Imprimir los numeros multiplos de 3*/
function ImprimirMultiplosde3(){
   for(i=0;i<=100;i+=3){ //i=i+3
        console.log(i);
   }
}
function ImprimirMultiplos3(){
    for(i=1;i<=100;i++){ 
        if(i%3==0)
         console.log(i);
    }
 }
 /*Imprimir la suma de los numeros impares,
 y la suma de los numeros pares
 menor a 50*/
function ImprimirImpar(){
    for(i=-1;i<50;i+=2){
         console.log(i);
    }
 }
 function ImprimirPar(){
    for(i=0;i<=50;i+=2){
         console.log(i);
    }
 }
  /*Imprimir la suma de los numeros impares,
 y la suma de los numeros pares
 menor a 50 RESUELTO POR DOCENTE*/
 function SImparesParesM1(){
    par=0;
    impar=0;
    for(i=1;i<=50;i+=2){
    impar+=i;
    par+=i+1;
    }
    console.log(par);
    console.log(impar);
    }
    function SImparesPareM2(){
    par=0;
    impar=0;
    for(i=1;i<=50;i++){
    if(i%2==1)impar+=i;
    else par+=i;
    }
    console.log(par);
    console.log(impar);
    }
    /*Imprimir la suma de los numeros impares,
 y la suma de los numeros pares
 menor a 50 RESUELTO POR DOCENTE con WHILE*/
function SImparesParesM1W(){
    par=0;
    impar=0;
    i=1;//Valores iniciales
    while(i<=50){//condicionales
    impar+=i;
    par+=i+1;
    i+=2;//Valor de avance
    }
    console.log(par);
    console.log(impar);
}
/*Imprimir la secuencia
N=8
1 0 1 0 1 0 1 0
-1 1 -1 1 -1 1 -1 1
1 2 -1 -2 1 2 -1 -2
3 4 5 3 4 5 3 4
Usar While o For
No usar array*/
function Imprimireje22(){
    i=-1;//Valores iniciales
    while(i<=2){//condicionales
        i+=1;//Valor de avance
    }
    console.log(i);
}
function Imprimireje2(){
   for(i=-1;i<=2;i+=2){ 
        console.log(i);
   }
}

function Imprimireje222(){
    let i = -1;
    let n = 2;
    while (i < 8) {
      i++;
      if (i === 3) {
         // continue;
      }
      n += i;
      console.log(n);
    }
}
function Secuencia1(){
    let limitSec=8
    for(let i=0; i<limiteSec; i++){
        if(i%2 == 0){
            ProcessingInstruction.stdout.write("1")
        }
        else{
            ProcessingInstruction.stdout.write("0")
        }
    } 
    console.log("");
    for(let i=0; i<limiteSec; i++){
        if(i%2 == 0){
            ProcessingInstruction.stdout.write("-1")
        }
        else{
            ProcessingInstruction.stdout.write("1")
        }
    }
    console.log("");
    for(let i=0; i<limiteSec; i++){
        if(i%4 == 0){
            ProcessingInstruction.stdout.write("-1")
        }
        else if (i%3 == 0){
            ProcessingInstruction.stdout.write("-2")
        }
        else if (i%2 == 0){
            ProcessingInstruction.stdout.write("-1")
        }
        else if (i%1 == 0){
            ProcessingInstruction.stdout.write("2")
        }
    }
}
function Decodificador(){
    for(i=1;i<=8;i++){
        if(i%2==1){
        console.log("1")
        }
        else{
        console.log("0")
        }
    }
console.log("");
}
function Decodificador2(){
for(i=1;i<=8;i++){
    if(i%2==1){
    console.log("1")
    }
    else{
    console.log("-1")
    }
}
console.log("");
}

function Serie4(){
    N=8
    for(x=3,i=1;i<=N;i++,x++){
        console.log(x);
        if(x==5)x=2;
    }
}
function Serie3(){
    N=8
    for(x=1,s=1,i=1;i<=N;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}
function Serie2(){
    N=8
for(x=-1,i=1;i<=N;i++,x*=-1){
    console.log(x);
    }
}
function Serie1(){
    N=8
    for(x=1,i=1;i<=N;i++,x--){
        console.log(x);
        if(x==0){
            x=2;
        }
    }
}