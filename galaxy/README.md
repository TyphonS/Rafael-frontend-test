# 🌌 Galaxy Finder

Uma aplicação **React + TypeScript + Vite** que permite explorar e aprender sobre diferentes galáxias.  
O projeto utiliza **Material UI (MUI)** para estilização, suporta busca em tempo real e exibe detalhes de cada galáxia a partir de um arquivo JSON local.

---

## ✨ Funcionalidades

- 📖 **Catálogo de galáxias** com nome, tipo, distância, número estimado de estrelas e descrição.
- 🔍 **Busca em tempo real** pelo nome da galáxia.
- 🌌 **Visual interativo**: ao clicar em uma galáxia, você vê detalhes como imagem, descrição e dados astronômicos.
- 🎨 **UI responsiva e moderna** com Material UI.
- 🌍 **Formatação numérica inteligente** com `Intl.NumberFormat`, exibindo valores grandes em milhões, bilhões ou trilhões.
- 🛰 **Página inicial com background cósmico**, chamando o usuário para explorar o catálogo.

---

## 🛠 Tecnologias utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) – build rápido e simples
- [Material UI (MUI)](https://mui.com/) – componentes visuais
- [React Router](https://reactrouter.com/) – navegação entre páginas
- JSON local (`/public/galaxies.json`) como fonte de dados

---

## ▶️ Como executar

### 1. Clonar o repositório e Executar

```bash
git clone https://github.com/seu-usuario/galaxy-finder.git
cd galaxy-finder
npm install
npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
