# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## API Response Screenshots 

BuildingTransaction:

![BuildingTransaction](<public/Screenshot 2023-09-13 at 6.07.38 PM.png>)

CreateWallet:

![CreateWallet](<public/Screenshot 2023-09-13 at 6.08.05 PM.png>)

Allowance:

![GetAllowance](<public/Screenshot 2023-09-13 at 6.08.40 PM.png>)

Balance:

![GetBalance](<public/Screenshot 2023-09-13 at 6.09.19 PM.png>)

Dex:

![GetDex](<public/Screenshot 2023-09-13 at 6.09.59 PM.png>)

LimitOrder:

![LimitOrder](<public/Screenshot 2023-09-13 at 6.10.40 PM.png>)

Minsend:

![GetMinsend](<public/Screenshot 2023-09-13 at 6.11.06 PM.png>)

PriceQuote:

![GetPriceQuote](<public/Screenshot 2023-09-13 at 6.11.47 PM.png>)

Quote Route:

![QuoteRoute](<public/Screenshot 2023-09-13 at 6.12.22 PM.png>)

Token list:

![Tokenlist](<public/Screenshot 2023-09-13 at 6.12.59 PM.png>)

Transaction :

![GetTransaction](<public/Screenshot 2023-09-13 at 6.13.27 PM.png>)

Transaction Hash :

![TransactionHash](<public/Screenshot 2023-09-13 at 6.13.49 PM.png>)
