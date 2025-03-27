qaid-design-system

src/
├── assets/           # Static files
│   ├── images/
│   └── styles/
│       └── global.css
│
├── components/       # Reusable components
│   ├── ui/          # Basic UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   └── Input/
│   │
│   └── layout/      # Layout components
│       ├── Header/
│       ├── Footer/
│       └── Sidebar/
│
├── pages/           # Page components
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   └── About/
│
├── hooks/           # Custom hooks
│   └── useLocalStorage.ts
│
├── utils/           # Helper functions
│   └── helpers.ts
│
├── services/        # API calls
│   └── api.ts
│
├── types/           # TypeScript types
│   └── index.ts
│
├── App.tsx
└── index.tsx