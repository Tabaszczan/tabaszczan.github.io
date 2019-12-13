function validateform() {
    var imie = document.myForm.imie.value;

    if (imie == null || imie == "") {
        alert("Imie nie moze byc puste");
        return false;
    }
    var x = document.myForm.usermail.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Podaj właściwy adres email \n pozycja @:" + atposition + "\n pozycja kropki:" + dotposition);
        return false;
    }
}
