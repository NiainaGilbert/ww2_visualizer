// app/(tables)/layout.tsx  ← CORRECT
export default function TablesLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {/* Tu peux mettre ce que tu veux ici, MAIS PAS <html> ni <body> */}
        <input type="text" placeholder="Recherche globale..." />
        {children}
      </>
    );
  }