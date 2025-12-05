# My React App - Text Editor Project

A simple **React-based Text Editor** application where users can type, edit, and manipulate text efficiently. This project showcases React components, state management, routing, and deployment on GitHub Pages.

## 🚀 Live Demo

Check it out here: [https://texteditor.sachinadhikari.com.np](https://texteditor.sachinadhikari.com.np)

## 🛠 Features

- Clean and minimal **text editing interface**
- Convert text to **uppercase, lowercase, and more**
- Copy text to clipboard
- Light/Dark mode toggle
- Alerts for user actions
- Built with **React 18** and **React Router DOM**

## 📂 Folder Structure

```
my-react-app/
│├── public/
││   ├── index.html
││   └── CNAME (for custom domain)
│├── src/   
││   ├── components/
││   │   ├── Navbar.js
││   │   ├── TextEditBox.js
││   │   ├── About.js
││   │   └── Alert.js
││   ├── App.js
││   ├── index.js
││   └── App.css
│├── .gitignore
│├── package.json
│└── README.md
```


## ⚡ Technologies Used

- **React 18** – For building the user interface
- **React Router DOM** – For routing between pages
- **CSS / Tailwind** – For styling (if used)
- **GitHub Pages** – For deployment

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sachinadk2011/my-react-app.git
cd my-react-app
npm install
```
### 💻 Running Locally

Start the development server:

```bash
npm start
```
Open http://localhost:3000 in your browser to see the app.

### 🚀 Deployment

To deploy to GitHub Pages:
1. Install the `gh-pages` package:

```bash
npm install gh-pages --save-dev
```
2. Add the following scripts to your `package.json` inside the `"scripts"` section:

```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",    
```
3. Make sure the homepage field in package.json is set correctly:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```
or for custom domain:
```json
"homepage": "https://<your-custom-domain>"
```
4. Run the deploy script:

```bash
npm run deploy
```
5. Additional configuration for custom domain:
   - Create a `CNAME` file in the `public` folder 
   with your custom domain name.
   - Configure DNS settings to point to GitHub Pages.

### 📖 Usage

- Enter your text in the editor
- Use buttons to modify text (Uppercase, Lowercase, Clear, Copy)
- Toggle Light/Dark mode using the navbar
- Navigate to the About page to see app information

### 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


### 🎨 Credits / Inspiration
This project was inspired by tutorials from [CodeWithHarry](https://www.youtube.com/watch?v=n_KtBVxBTb4&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=13). Some implementations are adapted for learning purposes.
