## Webbybooster

Webbybooster est une application web moderne conçue pour simplifier et optimiser l'activité des formateurs indépendants. Cette plateforme tout-en-un aide à gérer les tâches administratives, planifier les cours et organiser efficacement les interventions.

## Technologies Utilisées

- [Next.js 14](https://nextjs.org/) - Framework React avec rendu côté serveur (SSR)
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript typé
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Zustand](https://zustand-demo.pmnd.rs/) - Bibliothèque de gestion d'état
- [dnd kit](https://dndkit.com/) - Boîte à outils pour la fonctionnalité glisser-déposer
- [Zod](https://zod.dev/) - Bibliothèque de validation de schéma
- [next-intl](https://next-intl.vercel.app/) - Solution d'internationalisation pour Next.js
- [next-themes](https://next-themes.vercel.app/) - Gestion des thèmes pour Next.js
- [Lucide React](https://lucide.dev/) - Bibliothèque d'icônes
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI réutilisables

## Fonctionnalités Principales

- Tableau Kanban pour la gestion des tâches
- Internationalisation (français et anglais)
- Thème clair/sombre
- Interface utilisateur responsive et accessible

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/webbybooster.git
   ```

2. Installez les dépendances :

   ```bash
   cd webbybooster
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

```bash
npm run dev # Lance l'application en mode développement.
# or
yarn dev # Construit l'application pour la production.
# or
pnpm dev # Démarre le serveur de production.
# or
bun dev # Exécute le linter ESLint.
```

## Structure du projet

```bash
webbybooster/
├── src/
│   ├── app/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── i18n/
│   ├── lib/
│   ├── middlewares/
│   ├── store/
│   ├── theme/
│   └── middleware.ts
├── public/
├── messages/
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Stockage des données

Actuellement, notre application utilise le stockage local (localStorage) pour conserver les tâches du kanban. Cette approche est adoptée pour simplifier le développement initial et permettre une utilisation hors ligne.
Par la suite, une implémentation de stockage en base de données est envisagée pour permettre une meilleure gestion des données et une utilisation plus performante de l'application.

De plus pour le Kanban je me suis inspiré de l'exemple suivant :

- https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui/tree/main
- https://desishub-docs.vercel.app/programming-tutorials/nextjs/kanban#prerequisites

Pour le calendrier des interventions faut améliorer encore pour edit, delete etc.
