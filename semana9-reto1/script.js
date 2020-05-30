function encode(text){
    text = text.toLowerCase();
    let charCode;
    let newCharCode;
    let result = "";

    for(i=0; i<text.length; i++){
        //console.log(text.charAt(i));
        //console.log(text.charCodeAt(i));

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
            newCharCode = charCode + 3;
        }

        result += String.fromCharCode(newCharCode);
    }

    console.log(result);
}

function decode(text){
    text = text.toLowerCase();
    // var res = str.charAt(0);
    // String.fromCharCode(e.keyCode);
}

encode("abc def xyz");