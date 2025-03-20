# Atomic Blog

## Project Description
Atomic Blog is a modern web application developed with React 19 and Tailwind CSS 4. This project demonstrates a scalable architecture using atomic design principles for user interface components.

## Technologies Used
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint
- Prettier

## Requirements
- Node.js (version 18 or higher)
- npm or yarn

## Installation

Clone the repository:
```bash
git clone [REPOSITORY_URL]
cd atomic-blog
```

Install dependencies:
```bash
npm install
# or
yarn
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Compiles TypeScript and builds the app for production to the `dist` folder.

### `npm run lint`

Runs linting checks on all code.

### `npm run preview`

Serves the build files locally for preview.

## Project Structure
```
atomic-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## Code Standards
This project follows code standards defined by the configured ESLint and Prettier.

## Contribution
1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the Branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.