function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    const passwordOutput = document.getElementById("passwordOutput");

    let charset = "";
    
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecial) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    passwordOutput.value = password;
}
