function condicional1(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    var ma=a;
    if (b>ma)ma=b;
    if (c>ma)ma=c;
    if (d>ma)ma=d;
    if (e>ma)ma=e;
    document.getElementById("txtRp").innerHTML=ma;
    return ma;
}
function condicional2(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    var ma=a;
    if (b<ma)ma=b;
    if (c<ma)ma=c;
    if (d<ma)ma=d;
    if (e<ma)ma=e;
    document.getElementById("txtRp").innerHTML=ma;
    return ma;
}
function condicional3(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    ma1=condicional1();
    me1=condicional2();
    //document.getElementById("txtRp").innerHTML=ma1+" "+me1;
    me2=ma1;
    if(a<me2 && a>me1)me2=a;
    if(b<me2 && b>me1)me2=b;
    if(c<me2 && c>me1)me2=c;
    if(d<me2 && d>me1)me2=d;
    if(e<me2 && e>me1)me2=e;//Se encontró el segundo menor
    me3=ma1;
    if(a<me3 && a>me2)me3=a;
    if(b<me3 && b>me2)me3=b;
    if(c<me3 && c>me2)me3=c;
    if(d<me3 && d>me2)me3=d;
    if(e<me3 && e>me2)me3=e;//Se encontró al tercer
    document.getElementById("txtRp").innerHTML=ma1+" "+me1+" / "+me2+" / "+me3;
}
function condicionalDoble(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    if(a>b){
        if(a>c)ma=a;
        else ma=c;
    }
    else{
        if(b>c)ma=b;
        else ma=c;
    }
    return ma;
}
function condicionalDobleEjercicio(){
    var a=parseInt(document.getElementById("txtn1").value);
    var b=parseInt(document.getElementById("txtn2").value);
    var c=parseInt(document.getElementById("txtn3").value);
    var d=parseInt(document.getElementById("txtn4").value);
    var e=parseInt(document.getElementById("txtn5").value);
    if (a > b) {
    if (a > c) {
      if (a > d) {
        if (a > e) {
          ma = a;
        } else {
          ma = e;
        }
      } else {
        if (d > e) {
          ma = d;
        } else {
          ma = e;
        }
      }
    } else {
      if (c > d) {
        if (c > e) {
          ma = c;
        } else {
          ma = e;
        }
      } else {
        if (d > e) {
          ma = d;
        } else {
          ma = e;
        }
      }
    }
  } else {
    if (b > c) {
      if (b > d) {
        if (b > e) {
          ma = b;
        } else {
          ma = e;
        }
      } else {
        if (d > e) {
          ma = d;
        } else {
          ma = e;
        }
      }
    } else {
      if (c > d) {
        if (c > e) {
          ma = c;
        } else {
          ma = e;
        }
      } else {
        if (d > e) {
          ma = d;
        } else {
          ma = e;
        }
      }
    }
  }

  if (a < b) {
    if (a < c) {
      if (a < d) {
        if (a < e) {
          me = a;
        } else {
          me = e;
        }
      } else {
        if (d < e) {
          me = d;
        } else {
          me = e;
        }
      }
    } else {
      if (c < d) {
        if (c < e) {
          me = c;
        } else {
          me = e;
        }
      } else {
        if (d < e) {
          me = d;
        } else {
          me = e;
        }
      }
    }
  } else {
    if (b < c) {
      if (b < d) {
        if (b < e) {
          me = b;
        } else {
          me = e;
        }
      } else {
        if (d < e) {
          me = d;
        } else {
          me = e;
        }
      }
    } else {
      if (c < d) {
        if (c < e) {
          me = c;
        } else {
          me = e;
        }
      } else {
        if (d < e) {
          me = d;
        } else {
          me = e;
        }
      }
    }
  }

  document.getElementById("txtRp").innerHTML = `Mayor: ${ma} Menor: ${me}`;
}