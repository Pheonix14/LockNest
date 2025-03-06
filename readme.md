# LockNest

**LockNest** is an open-source, secure password generator built with **Node.js**. It features a sleek **Material You 3 design**, **end-to-end encryption**, and **Progressive Web App (PWA)** support to ensure your passwords are generated and transmitted securely. LockNest is designed to be simple, modern, and user-friendly, making it a great tool for generating strong passwords.

---

## Features

- **Material You 3 Design**: A modern, adaptive UI that follows Google's Material You design style.
- **End-to-End Encryption**: Passwords are encrypted before being sent to the server and decrypted only on the client side.
- **Random Encryption Key**: A unique encryption key is generated for each session, ensuring maximum security.
- **Customizable Passwords**: Generate passwords with customizable length and character types (uppercase, lowercase, numbers, symbols).
- **Password Strength Evaluation**: Visual feedback on the strength of the generated password.
- **Progressive Web App (PWA)**: Installable on your device for a native app-like experience.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Pheonix14/LockNest.git
   cd LockNest
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   npm run start
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Set Password Length**:
   - Use the slider to adjust the length of the password.

2. **Select Character Types**:
   - Choose which types of characters to include in the password (uppercase, lowercase, numbers, symbols).

3. **Generate Password**:
   - Click the "Generate Password" button to create a secure password.

4. **Copy Password**:
   - Click the copy button to copy the password to your clipboard.

---

## How It Works

- **Password Generation**:
  - The server generates a random password based on the user's preferences.
  - The password is encrypted using a randomly generated key before being sent to the client.

- **End-to-End Encryption**:
  - The client decrypts the password using the key received from the server.
  - The password is never transmitted or stored in plaintext.

- **Material You Design**:
  - The UI adapts to the user's system theme (light/dark mode) and follows Material You design style.

- **Progressive Web App (PWA)**:
  - LockNest can be installed on your device for a native app-like experience.

---

## Contributing

We welcome contributions! If you'd like to contribute to LockNest, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## License

LockNest is released under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Express**: The web framework for Node.js used to build the backend.
- **EJS**: The templating engine used for rendering views.
- **CryptoJS**: Used for end-to-end encryption.
- **Node.js**: The runtime environment for the backend.

---

## Contact

For questions, feedback, or support, please open an issue on GitHub or contact us at:

- **GitHub**: [Pheonix14](https://github.com/Pheonix14)

---

Enjoy generating secure passwords with **LockNest**! 🔒