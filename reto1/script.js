/**
 * Desarrollar una aplicacion para codificar y descodificar texto. 
 */

//console.log(text.charAt(i));
//console.log(text.charCodeAt(i));
// String.fromCharCode(e.keyCode);

function encode(text, type_encode){
    text = text.toLowerCase();
    let charCode;
    let newCharCode;
    let result = "";

    for(i=0; i<text.length; i++){

        charCode = text.charCodeAt(i);
        
        if(charCode == 120){ // x
            newCharCode = 97;
        }else if(charCode == 121){ // y
            newCharCode = 98;
        }else if(charCode == 122){ // z
            newCharCode = 99;
        }else if(charCode == 32){ //space
            newCharCode = 32;
        }else{
            newCharCode = charCode + type_encode;
        }

        result += String.fromCharCode(newCharCode);
    }

    console.log(result);
}

function decode(text, type_encode){
    text = text.toLowerCase();
    let charCode;
    let newCharCode;
    let result = "";

    for(i=0; i<text.length; i++){

        charCode = text.charCodeAt(i);
        
        if(charCode == 97){ // x
            newCharCode = 120;
        }else if(charCode == 98){ // y
            newCharCode = 121;
        }else if(charCode == 99){ // z
            newCharCode = 122;
        }else if(charCode == 32){ //space
            newCharCode = 32;
        }else{
            newCharCode = charCode - type_encode;
        }

        result += String.fromCharCode(newCharCode);
    }

    console.log(result);
}

encode("abc def xyz", 3);

decode("def ghi abc", 3);
