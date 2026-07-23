<div align="center">
  <img src="https://img.shields.io/badge/Astra-Ecosystem-8A2BE2?style=for-the-badge&logo=shield" alt="Astra Ecosystem" />
  <h1>🛡️ ciaatopup-libsignal 🛡️</h1>
  <p><b>High-Performance Signal Protocol Implementation for AstraBail</b></p>

  <p>
    <img src="https://img.shields.io/badge/Version-2.0.1-blue.svg?style=flat-square" alt="Version" />
    <img src="https://img.shields.io/badge/License-GPL_3.0-green.svg?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/Node.js-%3E%3D14-brightgreen.svg?style=flat-square" alt="Node" />
  </p>
</div>

---

## 🌟 Introduction

**ciaatopup-libsignal** is a highly optimized, specialized port of the Signal Protocol (originally by Open Whisper Systems) tailored explicitly for the **Astra Ecosystem** by CiaaSoft-Official 

It provides the core cryptographic foundation for **CiaaTopUpbail**, ensuring that your WhatsApp Web bots and API clients communicate securely, efficiently, and without decryption bottlenecks.

## 🚀 Key Features

*   **CiaaTopUpbail Optimized:** Pre-configured and fine-tuned to work seamlessly with the latest AstraBail library.
*   **High Performance:** Faster cryptographic handshakes and message decryption, reducing the load on your VPS.
*   **Multi-Device Ready:** Fully supports the complex key distributions required for WhatsApp's modern Multi-Device architecture.
*   **Native TypeScript/JavaScript Support:** Runs smoothly in modern Node.js environments.

## 📦 Installation

This library is designed to be used as a dependency for **CiaaTopUpbail**. You can install it directly from GitHub:

```bash
npm install github:CiaaSoft-Official/ciaatopup-libsignal
```

## 🛠️ Usage Example

This library is primarily intended to be consumed internally by CiaaTopUpbail. However, if you are building custom extensions:

```javascript
const libsignal = require('ciaatopup-libsignal');

// Inisialisasi Session Builder
const sessionBuilder = new libsignal.SessionBuilder(store, remoteAddress);

// Memproses PreKey Message
await sessionBuilder.processPreKey(preKeyMessage);

// Mendekripsi Pesan
const sessionCipher = new libsignal.SessionCipher(store, remoteAddress);
const plaintext = await sessionCipher.decryptPreKeyWhisperMessage(ciphertext);
```

## ⚖️ License

This project incorporates the Signal Protocol and is licensed under the **GPL-3.0 License** to comply with Open Whisper Systems' original licensing requirements.

---

<div align="center">
  <b>Developed & Maintained by <a href="https://github.com/CiaaSoft-Official">CiaaSoft-Official</a></b><br>
  <i>Part of the CiaaTopUp Project Ecosystem © 2026</i>
</div>
