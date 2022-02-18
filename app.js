let result =document.getElementsByClassName("main__result--second")[0];
let memoryOperation = document.getElementsByClassName("main__result--first")[0];
let operator = document.getElementsByClassName("main__result--first")[1];
let buttons = document.getElementsByClassName("main__numbers")[0];

buttons.addEventListener("click", buttonFunction );


function buttonFunction(e) {
    console.log(e.target.classList);
    if (e.target.classList[2] =="number") {
        result.innerHTML += e.target.innerHTML;
        
    };

    if (e.target.className =="background main__numbers--ac") {
        result.innerHTML = "";
        memoryOperation.innerHTML = "";
        operator.innerHTML = "";
    };

    if (e.target.className =="background main__numbers--del") {
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length-1)
    } ;

    if (e.target.className == "background main__numbers--punkt") {
        if ( result.innerHTML == "") {
            result.innerHTML = "0" + "."
        }else if(result.innerHTML.lastIndexOf(".") > -1){
            return
        }
        else {
            result.innerHTML += "."
        }
    };

    if (e.target.className == "background main__numbers--percent") {
        console.log(e.target.className);
        if ( result.innerHTML == "") {
            return
        } else {
            console.log(e.target.className);

            result.innerHTML = +(result.innerHTML) / 100
        }
    }



    operatorFunction(e);

}




function operatorFunction(e){

    switch (e.target.className) {
        case "background main__numbers--multiplication":
            console.log(memoryOperation.innerHTML.length);
            if (result.innerHTML.length == 0) {
                operator.innerHTML = "&#215;"
            }else if (memoryOperation.innerHTML.length == 0) {
                memoryOperation.innerHTML = result.innerHTML ;
                operator.innerHTML = "&#215;";
                result.innerHTML = "";
            }else{
                memoryOperation.innerHTML = +(memoryOperation.innerHTML) * +(result.innerHTML);
                result.innerHTML = "";
                operator.innerHTML = "&#215;";  
            }
            break;
        case "background main__numbers--divide":
            console.log(memoryOperation.innerHTML);
            if (memoryOperation.innerHTML.length == 0) {
                memoryOperation.innerHTML = result.innerHTML ;
                operator.innerHTML = "&#247;";
                result.innerHTML = "";
            }else if( result.innerHTML.length == 0) {
                operator.innerHTML = "&#247;"
            }
            else{
                memoryOperation.innerHTML = Number(memoryOperation.innerHTML) / +(result.innerHTML);
                result.innerHTML = "";
                operator.innerHTML = "&#247;";   
            }
            break;
        case "background main__numbers--extraction":
            console.log(memoryOperation.innerHTML);
            if (memoryOperation.innerHTML.length == 0) {
                memoryOperation.innerHTML = result.innerHTML ;
                operator.innerHTML = "&#8722;";
                result.innerHTML = "";
            }else if( result.innerHTML.length == 0) {
                operator.innerHTML = "&#8722;"
            }
            else{
                memoryOperation.innerHTML = Number(memoryOperation.innerHTML) - +(result.innerHTML);
                result.innerHTML = "";
                operator.innerHTML = "&#8722;";   
            };
            break
        case "background main__numbers--plus":
            console.log(memoryOperation.innerHTML);
            if (memoryOperation.innerHTML.length == 0) {
                memoryOperation.innerHTML = result.innerHTML ;
                operator.innerHTML = "&#43;";
                result.innerHTML = "";
            }else if( result.innerHTML.length == 0) {
                operator.innerHTML = "&#43;"
            }
            else{
                memoryOperation.innerHTML = Number(memoryOperation.innerHTML) + +(result.innerHTML);
                result.innerHTML = "";
                operator.innerHTML = "&#43;";   
            };
            break;
        case "background main__numbers--equals":
            console.log(memoryOperation.innerHTML);
            if (memoryOperation.innerHTML.length == 0) {
                memoryOperation.innerHTML = result.innerHTML ;
            }else{
                console.log(operator.innerHTML);
                if (result.innerHTML =="") {
                    memoryOperation.innerHTML ="";
                    operator.innerHTML = "";
                    return
                }else{
                    switch (operator.innerHTML) {
                        case "+":
                            result.innerHTML = Number(memoryOperation.innerHTML) + +(result.innerHTML);
                            memoryOperation.innerHTML ="";
                            operator.innerHTML = "" 
                            break;
                        case "−":
                            result.innerHTML = Number(memoryOperation.innerHTML) - +(result.innerHTML);
                            memoryOperation.innerHTML ="";
                            operator.innerHTML = "" ;
                            break;
        
                        case "×":
                            result.innerHTML = Number(memoryOperation.innerHTML) * +(result.innerHTML);
                            memoryOperation.innerHTML ="";
                            operator.innerHTML = "" ;
                            break;
        
                        case "÷":
                            result.innerHTML = Number(memoryOperation.innerHTML) / +(result.innerHTML);
                            memoryOperation.innerHTML ="";
                            operator.innerHTML = "" ;
                            break;
                        default:
                            break}
                }
        
            break;
        }
    }



}

    /* if (e.target.className =="background main__numbers--multiplication") {
        console.log(memoryOperation.innerHTML.length);
        if (result.innerHTML.length == 0) {
            operator.innerHTML = "&#215;"
        }else if (memoryOperation.innerHTML.length == 0) {
            memoryOperation.innerHTML = result.innerHTML ;
            operator.innerHTML = "&#215;";
            result.innerHTML = "";
        }else{
            memoryOperation.innerHTML = +(memoryOperation.innerHTML) * +(result.innerHTML);
            result.innerHTML = "";
            operator.innerHTML = "&#215;";  
        }
    };
    if (e.target.className =="background main__numbers--divide") {
        console.log(memoryOperation.innerHTML);
        if (memoryOperation.innerHTML.length == 0) {
            memoryOperation.innerHTML = result.innerHTML ;
            operator.innerHTML = "&#247;";
            result.innerHTML = "";
        }else if( result.innerHTML.length == 0) {
            operator.innerHTML = "&#247;"
        }
        else{
            memoryOperation.innerHTML = Number(memoryOperation.innerHTML) / +(result.innerHTML);
            result.innerHTML = "";
            operator.innerHTML = "&#247;";   
        }
    };
    if (e.target.className =="background main__numbers--extraction") {
        console.log(memoryOperation.innerHTML);
        if (memoryOperation.innerHTML.length == 0) {
            memoryOperation.innerHTML = result.innerHTML ;
            operator.innerHTML = "&#8722;";
            result.innerHTML = "";
        }else if( result.innerHTML.length == 0) {
            operator.innerHTML = "&#8722;"
        }
        else{
            memoryOperation.innerHTML = Number(memoryOperation.innerHTML) - +(result.innerHTML);
            result.innerHTML = "";
            operator.innerHTML = "&#8722;";   
        }
    };

    if (e.target.className =="background main__numbers--plus") {
        console.log(memoryOperation.innerHTML);
        if (memoryOperation.innerHTML.length == 0) {
            memoryOperation.innerHTML = result.innerHTML ;
            operator.innerHTML = "&#43;";
            result.innerHTML = "";
        }else if( result.innerHTML.length == 0) {
            operator.innerHTML = "&#43;"
        }
        else{
            memoryOperation.innerHTML = Number(memoryOperation.innerHTML) + +(result.innerHTML);
            result.innerHTML = "";
            operator.innerHTML = "&#43;";   
        }
    };

    if (e.target.className =="background main__numbers--equals") {
        console.log(memoryOperation.innerHTML);
        if (memoryOperation.innerHTML.length == 0) {
            memoryOperation.innerHTML = result.innerHTML ;
        }else{
            console.log(operator.innerHTML);
            if (result.innerHTML =="") {
                memoryOperation.innerHTML ="";
                operator.innerHTML = "";
                return
            }else{
                switch (operator.innerHTML) {
                    case "+":
                        result.innerHTML = Number(memoryOperation.innerHTML) + +(result.innerHTML);
                        memoryOperation.innerHTML ="";
                        operator.innerHTML = "" 
                        break;
                    case "−":
                        result.innerHTML = Number(memoryOperation.innerHTML) - +(result.innerHTML);
                        memoryOperation.innerHTML ="";
                        operator.innerHTML = "" ;
                        break;
    
                    case "×":
                        result.innerHTML = Number(memoryOperation.innerHTML) * +(result.innerHTML);
                        memoryOperation.innerHTML ="";
                        operator.innerHTML = "" ;
                        break;
    
                    case "÷":
                        result.innerHTML = Number(memoryOperation.innerHTML) / +(result.innerHTML);
                        memoryOperation.innerHTML ="";
                        operator.innerHTML = "" ;
                        break;
                    default:
                        break;
                }
        }
        }
    }; */