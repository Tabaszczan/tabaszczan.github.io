function validateForm() {
   checkString(document.forms["myForm"]["imie"].value, "Złe imie");

}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}
function isEmpty(str, msg){
   if (str == "") {
        alert(msg);
        return false;
    }  
}
function checkString(str, msg) {
    if (str == "") {
        alert(msg);
        return false;
    } else if (isWhiteSpace(str)) {
        alert(msg)
        return false;
    }
}
}