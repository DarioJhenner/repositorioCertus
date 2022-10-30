function MensajeProducto(){
    a=10;
    b=20;
    c=a*b;
    document.getElementById("Producto").innerHTML=c+"";
}
function Alertas(){
    window.alert("Mi nombre es: Charles Dummar");
}
function Printers(){
    window.alert("Mi nombre es: Diego");
}
function Printers(){
    window.print("Mi nombre es: Diego");
}
function Ingreso(){
    a=document.getElementById("Suma1").value ; 
    window.alert(a);
}


/*  /////////////////////////////  EJERCICIOS REUELTOS/////////////////////////////// */

function Invertir(){

	/*n=document.getElementById("aInvertir").value;
    reverse=n.toString().split("").reverse().join("");
    window.alert("El numero invertido es : " +  reverse );*/
    n=document.getElementById("aInvertir").value;
    if(n>999){
        window.alert("El numero tiene mas de 3 digitos");
        document.getElementById("aInvertir").value=0;
    }
    if(n<100){
        window.alert("El numero tiene menos de 3 digitos");
        document.getElementById("aInvertir").value=0;
    }
    else{u=n%10
        n=Math.floor(n/10)
        d=n%10
        c=Math.floor(n/10)
        reverse=u*100+d*10+c
        window.alert("El numero invertido es : "  +reverse );
    }

}

function Mayor(){
    n1=document.getElementById("mayor1").value ;
    n2=document.getElementById("mayor2").value ;
    n3=document.getElementById("mayor3").value ;
    ma=n1;
    if (n2 > ma)ma=n2;
    if (n3 > ma)ma=n3;

    window.alert("El numero mayor es : " +ma );
}

function SegundoMenor(){
    a=document.getElementById("segundoMenor1").value ;
    b=document.getElementById("segundoMenor2").value ;
    c=document.getElementById("segundoMenor3").value ;
    ma=a;
    if (b > ma)ma=b;
    if (c > ma)ma=c;
    me=a;
    if (b < me)me=b;
    if (c < me)me=c;
    me2=ma
    if (a <ma && a>me) me2=a;
    if (b <ma && b>me) me2=b;
    if (c <ma && c>me) me2=c;
    window.alert("El segundo menor es : " +me2 );
}

function GradosMinSeg(){

    /*graFull=document.getElementById("Suma1").value;
    gra= Math.trunc(graFull);
    decimalGra= graFull - gra;
    
    minFull=decimalGra*60;
    min=Math.trunc(minFull);
    decimalMin= minFull - min;
    segFull=decimalMin*60;
    seg=Math.round(segFull);
    window.alert(gra+"°"+min+"'"+seg+"''");*/

    seg=document.getElementById("Cifra").value;
    min=Math.floor(seg/60);
    seg=seg%60;
    window.alert("el numero equivale a: "+min+" min "+ seg+" seg" );
}