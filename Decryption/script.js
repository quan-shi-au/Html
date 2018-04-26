function decrypt() {

    debugger;

    var myVector = "Iik3NlhqOYGb5nqdJQqtAw==";
    var myEncrypted = "b6vPQPKTl9BCSDuIt5S4DQ==";
    var mykey = "Nw4nkaiRfSgpCqPrjO/FR7z1IU79wgSOufbuXWND2SM=";

    var iv = CryptoJS.enc.Base64.parse(myVector);
    var key = CryptoJS.enc.Base64.parse(mykey);

    var decrypted = CryptoJS.AES.decrypt(myEncrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    })

    var decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

    return decryptedString;

}

var decrypted = decrypt();
$('#decrypted').text("Decrypted: " + decrypted);
