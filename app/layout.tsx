import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portail de Communication Scolaire",
  description: "Plateforme de communication pour notre établissement scolaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="font-bold text-xl">
                École Connect
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/messages" className="hover:text-blue-600 transition-colors">
                  Messages
                </a>
                <a href="/agenda" className="hover:text-blue-600 transition-colors">
                  Agenda
                </a>
                <a href="/annonces" className="hover:text-blue-600 transition-colors">
                  Annonces
                </a>
                <a href="/documents" className="hover:text-blue-600 transition-colors">
                  Documents
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a href="/profil" className="hover:text-blue-600 transition-colors">
                Mon Profil
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Connexion
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-100 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>📞 01 23 45 67 89</li>
                  <li>📧 contact@ecole-connect.fr</li>
                  <li>📍 123 Rue de l'École</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li><a href="/actualites" className="hover:underline">Actualités</a></li>
                  <li><a href="/calendrier" className="hover:underline">Calendrier scolaire</a></li>
                  <li><a href="/equipe" className="hover:underline">Équipe pédagogique</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Ressources</h3>
                <ul className="space-y-2">
                  <li><a href="/bibliotheque" className="hover:underline">Bibliothèque numérique</a></li>
                  <li><a href="/faq" className="hover:underline">FAQ</a></li>
                  <li><a href="/aide" className="hover:underline">Aide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Légal</h3>
                <ul className="space-y-2">
                  <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
                  <li><a href="/confidentialite" className="hover:underline">Politique de confidentialité</a></li>
                  <li><a href="/cgv" className="hover:underline">CGV</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
              © {new Date().getFullYear()} École Connect. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}