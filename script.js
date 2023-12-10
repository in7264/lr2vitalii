function encryptDES() {
    const inputText = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const outputText = document.getElementById("outputText");

    // Check if the key is 64 bits (8 characters)
    if (key.length !== 8) {
        alert("Key must be 64 bits (8 characters) long.");
        return;
    }

    // Convert the key and plaintext to WordArray objects
    const keyWordArray = CryptoJS.enc.Utf8.parse(key);
    const textWordArray = CryptoJS.enc.Utf8.parse(inputText);

    // Encrypt the text with DES
    const encrypted = CryptoJS.DES.encrypt(textWordArray, keyWordArray, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    // Convert the result to a string and display it
    const encryptedText = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    outputText.value = encryptedText;
}

function decryptDES() {
    const inputText = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;
    const outputText = document.getElementById("outputText");

    // Check if the key is 64 bits (8 characters)
    if (key.length !== 8) {
        alert("Key must be 64 bits (8 characters) long.");
        return;
    }

    // Convert the key and ciphertext to WordArray objects
    const keyWordArray = CryptoJS.enc.Utf8.parse(key);
    const ciphertextWordArray = CryptoJS.enc.Base64.parse(inputText);

    // Decrypt the ciphertext with DES
    const decrypted = CryptoJS.DES.decrypt(
        { ciphertext: ciphertextWordArray },
        keyWordArray,
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }
    );

    // Convert the result to a string and display it
    const decryptedText = CryptoJS.enc.Utf8.stringify(decrypted);
    outputText.value = decryptedText;
}
