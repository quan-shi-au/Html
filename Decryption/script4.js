// Code goes here
var keySize = 256;
var ivSize = 128;
var iterations = 100;

var message = "Hello World";
var password = "Secret Password";


function encrypt(msg, pass) {

    debugger;

    var myVector = "eHh4eHh4eHh4eHh4eHh4eA==";
    var mykey = "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE=";

    var iv = CryptoJS.enc.Base64.parse(myVector);
    var key = CryptoJS.enc.Base64.parse(mykey);

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });

    var test = encrypted.toString(CryptoJS.enc.Utf8);

    var transitmessage = encrypted.toString(CryptoJS.enc.Base64);

    //CryptoJS.enc.Base64.stringify(encrypted);

    return transitmessage;
}

function decrypt(transitmessage, pass) {

    debugger;

    var myVector = "Iik3NlhqOYGb5nqdJQqtAw==";
    var myEncrypted = "b6vPQPKTl9BCSDuIt5S4DQ==";
    var mykey = "Nw4nkaiRfSgpCqPrjO/FR7z1IU79wgSOufbuXWND2SM=";

    var iv = CryptoJS.enc.Base64.parse(myVector);
    var encrypted = CryptoJS.enc.Base64.parse(myEncrypted);
    var key = CryptoJS.enc.Base64.parse(mykey);

    var utf8Iv = iv.toString(CryptoJS.enc.Utf16);
    //var utf8Encrypted = encrypted.toString(CryptoJS.enc.Utf8);
    var utf8Key = key.toString(CryptoJS.enc.Utf16);

    var decrypted = CryptoJS.AES.decrypt(myEncrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    })

    var decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

    return decrypted;

}


function decrypt1(transitmessage, pass) {

    debugger;

    var myVector = "eHh4eHh4eHh4eHh4eHh4eA==";
    var myEncrypted = "SwoVcHXoVAi0kQaDoX714A==";
    var mykey = "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE=";

    var iv = CryptoJS.enc.Base64.parse(myVector);
    var encrypted = CryptoJS.enc.Base64.parse(myEncrypted);
    var key = CryptoJS.enc.Base64.parse(mykey);

    var utf8Iv = iv.toString(CryptoJS.enc.Utf16);
    //var utf8Encrypted = encrypted.toString(CryptoJS.enc.Utf8);
    var utf8Key = key.toString(CryptoJS.enc.Utf16);

    var decrypted = CryptoJS.AES.decrypt(myEncrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    })

    var decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

    return decrypted;
}

//var encrypted = encrypt("sam6547", password);
var decrypted = decrypt(encrypted, password);

$('#encrypted').text("Encrypted: " + encrypted);
$('#decrypted').text("Decrypted: " + decrypted.toString(CryptoJS.enc.Utf8));
