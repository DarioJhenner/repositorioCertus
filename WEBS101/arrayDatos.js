function Serie1(){
    //-1 1 -1 1 -1 1 -1 1
    N=8;
    v=1;
    x=-1;
    while(v<=N){
        console.log(x);
        x=x*-1;
        v++;//valor de avance 1
    }   
}
function Serie2(){
    //-1 1 -1 1 -1 1 -1 1
    N=8;
    v=1;
    let Ax=[];
    Ax.push(-1);
    while(v<=N){
        Ax.push(Ax[v-1]*-1);
        console.log(Ax[v-1]);
        v++;//valor de avance 1
    }   
}
function Serie22(){
    //-1 1 -1 1 -1 1 -1 1
    N=8
for(x=-1,i=1;i<=N;i++,x*=-1){
    console.log(x);
    }
}
function Serie222(){
    //-1 1 -1 1 -1 1 -1 1
    N=8;
    v=1;
    let Ax=[];
    Ax.push(-1);
    while(v<=N){
        Ax.push(Ax[v-1]*-1);
        console.log(Ax[v-1]);
        v++;//valor de avance 1
    }   
}
function Serie11(){
    //1 0 1 0 1 0 1 0 
    N=8
    for(x=1,i=1;i<=N;i++,x--){
        console.log(x);
        if(x==0){
            x=2;
        }
    }
}
function Serie111(){
    //1 0 1 0 1 0 1 0 
    n=8
    v=1;
    let Ax=[];
    Ax.push(1,0);
    while(v<=n){
        Ax.push(Ax[v-1]);
        console.log(Ax[v-1])
        v++;
    }   
}

function Serie44(){
    //3 4 5 3 4 5 3 4
    N=8
    for(x=3,i=1;i<=N;i++,x++){
        console.log(x);
        if(x==5)x=2;
    }
}
function Serie33(){
    //1 2 -1 -2 1 2 -1 -2
    N=8
    for(x=1,s=1,i=1;i<=N;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}
function Serie3(){
    //1 2 -1 -2 1 2 -1 -2
    n=8;
    v=1;//=i
    x=1;//=s
    s=1;
    let Ax = [];//x=x
    while(v<=n){
        Ax.push(s*x);
        console.log(Ax[v-1]);
        if (x==2) {
            x=0;
            s*-1;
        }
        x++;
        v++;
        }
    }
    console.log(Ax);{
    }
    function Serie333(){
        //1 2 -1 -2 1 2 -1 -2
        n=6
        v=1;
        x=1
        s=1
        let Ar=[];
    
        while(v<=n){
            Ar.push(x);
            console.log(Ar[v-1]*s)
            if(x == 2 ){
                x=0
                s=s*-1
            }
            x++
            v++;
        }
    }
    
    function Serie444(){
        //3 4 5 3 4 5 3 4
        n=6
        v=1;
        x=3
        let Ar=[];
    
        while(v<=n){
            Ar.push(x);
            console.log(Ar[v-1])
            if(x == 5 ){
                x=2
            }
            x++
            v++;
        }
    
    }