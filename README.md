# TypeScript CLI Calculator

A simple, type-safe Command Line Interface (CLI) calculator built with TypeScript and Node.js.

## Features
- Basic arithmetic operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), and Division (`/`).
- Input validation to prevent non-numeric inputs.
- Safe handling for division by zero.
- Run instantly on both PC and Android (via Termux).

---

## How to Run

Choose your platform below to set up and run the calculator.

### 💻 On PC (Windows / Mac / Linux)

1. **Clone this repository:**
   ```bash
   git clone https://github.com
   cd YOUR_REPOSITORY_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the program instantly using `tsx`:**
   ```bash
   npx tsx kalkulator.ts
   ```

---

### 📱 On Android (via Termux)

1. **Set up storage and go to the Download folder:**
   ```bash
   termux-setup-storage
   cd /sdcard/Download
   ```

2. **Clone this repository into your Download folder:**
   ```bash
   git clone https://github.com
   cd YOUR_REPOSITORY_NAME
   ```

3. **Install the required Node types and `tsx` package:**
   ```bash
   npm install @types/node tsx --save-dev
   ```

4. **Run the program directly:**
   ```bash
   npx tsx kalkulator.ts
   ```

---

## Developer Info
- **Developer:** [Zynzz / nocadangan699]
- **Country of Origin:** 🇮🇩 Indonesia

