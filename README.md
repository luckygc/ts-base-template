# TypeScript Base Template

A modern TypeScript project template with Vite, Vue 3, ESLint, and Prettier.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Fast build tool
- 🎯 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🖖 [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- 📦 [ESLint](https://eslint.org/) - Code linting with Airbnb config
- 💅 [Prettier](https://prettier.io/) - Code formatting

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

### Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check
```

### Type checking

```bash
npm run type-check
```

## Project Structure

```
├── src/
│   ├── App.vue          # Main Vue component
│   ├── main.ts          # App entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
└── package.json         # Dependencies and scripts
```
