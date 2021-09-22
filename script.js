"use strict";

function sum(...args){

    var total=0;
    //total = args.reduce((acc,elem)=> acc+elem,0);
    for(var i=0; i<args.length; i++){
        //console.log(args[0]);
        total += args[i];
    }
    console.log(total);

}
sum(1,4);
sum(3,6,8);
sum(6,8,8,4);
