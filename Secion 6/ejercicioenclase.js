function invertirNumero() {
    var numero = window.prompt('Ingrese numero de 3 digitos: ');
    pos = 3;
    var aux = [];
    for (let index = 0; index <= 3; index++) {
        aux[index] = numero[pos-index];
    }
    window.alert('El numero invertido es: ' + aux.join(''));
}

    function calcularNumeroMayor() {
        var aux, mayor;
        n1 = window.prompt('Ingrese primer numero: ');
        n2 = window.prompt('Ingrese segundo numero: ');
        n3 = window.prompt('Ingrese tercer numero: ');
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        n3 = parseInt(n3);

        if (n1 > n2) {
            aux = n1;
        } else {
            aux = n1
        }

        if (aux > n3) {
            mayor =  aux;
        } else {
            mayor = n3;
        }

        window.alert('El numero mayor es: ' + mayor);
    }

    function encontrarSegundoMenor() {
        n1 = window.prompt('Ingrese primer numero: ');
        n2 = window.prompt('Ingrese segundo numero: ');
        n3 = window.prompt('Ingrese tercer numero: ');
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        n3 = parseInt(n3);

        if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            if ((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) {
                window.alert('El segundo menor es: ' + n1);
            }
            if ((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) {
                window.alert('El segundo menor es: ' + n2);
            }
            if ((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) {
                window.alert('El segundo menor es: ' + n3);
            }
        } else {
            window.alert('Los numeros deben ser diferentes');
        }
    }

    function Convertir(){
        a = document.getElementById("grados").value;
        g = Math.floor(a);
        b = (a-g)*60;
        m = Math.floor(b);
        c = (b-m)*60;
        s = Math.round(c);
        window.alert("Grados: "+g+" Minutos: "+m+" Segundos: "+s);
    }
    