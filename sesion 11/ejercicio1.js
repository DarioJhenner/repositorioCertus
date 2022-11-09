    function cajero(){
        numeroD = document.getElementById("txtNumero").value;


        if(numeroD >=50){
            C= numeroD/50;
            console.log("existen "+Math.trunc(C)+" billete de 50 soles");
            numeroD = numeroD % 50;
        }
        if(numeroD >=20){
            V=numeroD/20;
            console.log("existen "+Math.trunc(V)+" billete de 20 soles");
            numeroD = numeroD % 20;
        }
        if(numeroD >=10){
            D=numeroD/10;
            console.log("existen "+Math.trunc(D)+" billete de 10 soles");
            numeroD = numeroD % 10;
        }
        if(numeroD >=5){
            CC=numeroD/5;
            console.log("existen "+Math.trunc(CC)+" moneda de 5 soles");
            numeroD = numeroD % 5;
        }
        if(numeroD >=1){
            U=numeroD/1;
            console.log("existen "+Math.trunc(U)+" monedas de un soles");
            numeroD = numeroD % 1;
        }

        document.getElementById("txtrespuesta").innerHTML = "existen "+Math.trunc(C)+" billete de 50 soles"+"\nexisten "+Math.trunc(V)+" billete de 20 soles"+"\nexisten "+Math.trunc(D)+" billete de 10 soles"+"\nexisten "+Math.trunc(CC)+" moneda de 5 soles"+"\nexisten "+Math.trunc(U)+" monedas de un soles";

    }

    function minutos(){
        segundos = document.getElementById("txtNumero").value;


  
    var numdays = Math.floor(segundos / 86400);
    var numhours = Math.floor((segundos % 86400) / 3600);
    var numminutes = Math.floor(((segundos % 86400) % 3600) / 60);
    var numseconds = ((segundos % 86400) % 3600) % 60;
    document.getElementById("txtrespuesta").innerHTML = numdays + " dias " + numhours + " horas " + numminutes + " minutos " + numseconds + " segundos";

    }

    function promedio(){
        numero1 = document.getElementById("txtNumero1").value;
        numero2 = document.getElementById("txtNumero2").value;
        numero3 = document.getElementById("txtNumero3").value;
        numero4 = document.getElementById("txtNumero4").value;

        ponderado= (numero1*(20/100)+numero2*(50/100)+numero3*(10/100)+numero4*(20/100));
        estado="";
        if(ponderado<=10){
            estado="bajo";
        }else{
            if(ponderado<=15){
                estado="regular";
            }else{
                estado="excelente";
            }
        }
        document.getElementById("txtrespuesta").innerHTML = ponderado+"-"+estado;

    }