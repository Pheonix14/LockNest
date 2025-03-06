const express = require('express');
const path = require('path');
const CryptoJS = require('crypto-js');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Password generation route
app.get('/generate-password', (req, res) => {
    const { length, uppercase, lowercase, numbers, symbols } = req.query;
    const password = generatePassword(
        parseInt(length), 
        uppercase === 'true', 
        lowercase === 'true', 
        numbers === 'true', 
        symbols === 'true'
    );

    // Generate a random encryption key for this session
    const encryptionKey = generateRandomKey();

    // Encrypt the password using the generated key
    const encryptedPassword = CryptoJS.AES.encrypt(password, encryptionKey).toString();

    // Send both the encrypted password and the encryption key to the client
    res.json({ password: encryptedPassword, key: encryptionKey });
});

// Password generation logic
function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let validChars = '';
    if (uppercase) validChars += uppercaseChars;
    if (lowercase) validChars += lowercaseChars;
    if (numbers) validChars += numberChars;
    if (symbols) validChars += symbolChars;

    if (validChars === '') {
        validChars = uppercaseChars + lowercaseChars + numberChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    return password;
}

// Generate a random encryption key
function generateRandomKey() {
    const keyLength = 32; // 256-bit key
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});