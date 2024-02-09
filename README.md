# Todo App Client

- client live site link : https://todo-app-client.netlify.app/
- github client link : https://github.com/Md-Zehad-Sarkar/todo-app-client.git
- simple server link : https://github.com/Md-Zehad-Sarkar/todo-app-server.git

## Technologies

- react / react-router-dom
- typescript
- redux / redux-toolkit
- tailwind css
- shadcn

## Project setup

- Open terminal and follow

#### Create React with TypeScript

- command on your terminal: npx create vite@latest todo-app-client --template typescript
- Or create manual : npm create vite@latest
- follow the command for setup manual
- type your project name
- select react
- select a typescript

#### Navigate to the Project Directory

- command on your terminal: cd todo-app-client

#### Install react router dom

- command on your terminal: npm install
- command on your terminal: npm install react-router-dom

#### Run development project

- command on your terminal: npm run dev

# Deploy proccess on netlify

- before deploy create a file likes \_redirects in your project public folder and write=> /\* /index.html 200
- public folder
  \_redirects
  /\* /index.html 200
-
- globally install netlify
- install netlify cli : npm install netlify-cli -g
- install as save dependency locally : npm install netlify-cli --save-dev
- login with netlify : netlify login
- start deploy now , initialized your project : netlify init
- What would you like to do? : Create & configure a new site (select)
- select your account
- build a dist file : npm run build
  Directory to deploy (blank for current dir): (dist)
- No netlify.toml detected. Would you like to create one with these build settings? (Y/n) press y
- success! you deploy successfully your project on netlify.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
