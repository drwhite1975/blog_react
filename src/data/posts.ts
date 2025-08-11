import type { Post } from "../types";

export const posts: Post[] = [
  {
    id: "intro-react",
    title: "Benvenuto nel Blog: perché React + TS",
    excerpt:
      "Vite, TypeScript e componenti accessibili: base solida per crescere come dev.",
    date: "2025-08-10",
    tags: ["react", "typescript", "vite"]
  },
  {
    id: "stato-props",
    title: "Stato e props: il minimo indispensabile",
    excerpt:
      "Come passare dati tra componenti e gestire lo stato locale in modo pulito.",
    date: "2025-08-09",
    tags: ["react", "props", "state"]
  },
  {
    id: "routing",
    title: "Prepariamo il routing",
    excerpt:
      "Struttura delle pagine e URL leggibili: la base per la navigazione.",
    date: "2025-08-08",
    tags: ["react-router", "architettura"]
  }
];

