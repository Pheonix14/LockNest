document.addEventListener('DOMContentLoaded', () => {
    const passwordOutput = document.getElementById('password-output');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const lengthSlider = document.getElementById('length');
    const lengthDisplay = document.getElementById('length-display');
    const strengthText = document.getElementById('strength-text');

    // Checkboxes
    const uppercaseCheck = document.getElementById('uppercase');
    const lowercaseCheck = document.getElementById('lowercase');
    const numbersCheck = document.getElementById('numbers');
    const symbolsCheck = document.getElementById('symbols');

    // Update length display
    lengthSlider.addEventListener('input', () => {
        lengthDisplay.textContent = lengthSlider.value;
    });

    // Generate password
    generateBtn.addEventListener('click', async () => {
        const length = lengthSlider.value;
        const uppercase = uppercaseCheck.checked;
        const lowercase = lowercaseCheck.checked;
        const numbers = numbersCheck.checked;
        const symbols = symbolsCheck.checked;

        try {
            // Fetch the encrypted password and encryption key from the server
            const response = await fetch(`/generate-password?length=${length}&uppercase=${uppercase}&lowercase=${lowercase}&numbers=${numbers}&symbols=${symbols}`);
            const data = await response.json();

            // Decrypt the password on the client side using the received key
            const decryptedPassword = decryptPassword(data.password, data.key);
            passwordOutput.value = decryptedPassword;

            // Update password strength
            updatePasswordStrength(decryptedPassword);
        } catch (error) {
            console.error('Error generating password:', error);
            passwordOutput.value = 'Error generating password';
        }
    });

    // Copy password
    copyBtn.addEventListener('click', () => {
        passwordOutput.select();
        document.execCommand('copy');

        // Visual feedback
        copyBtn.textContent = 'Copied!';
        copyBtn.style.backgroundColor = '#34A853';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
            copyBtn.style.backgroundColor = '';
        }, 1000);
    });

    // Password strength evaluation
    function updatePasswordStrength(password) {
        let strength = 'Weak';
        let strengthColor = '#D93025';

        // Criteria for strength
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        // Strength calculation
        let score = 0;
        if (password.length >= 12) score++;
        if (hasUppercase) score++;
        if (hasLowercase) score++;
        if (hasNumbers) score++;
        if (hasSymbols) score++;

        // Determine strength
        if (score >= 4) {
            strength = 'Strong';
            strengthColor = '#34A853';
        } else if (score >= 3) {
            strength = 'Medium';
            strengthColor = '#FBBC05';
        }

        strengthText.textContent = strength;
        strengthText.style.color = strengthColor;
    }

    // Decrypt password
    function decryptPassword(encryptedPassword, key) {
        const bytes = CryptoJS.AES.decrypt(encryptedPassword, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    // Initial generation
    generateBtn.click();
});