export default function Footer() {
  return (
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
              <li>
                <a href="/actualites" className="hover:underline">
                  Actualités
                </a>
              </li>
              <li>
                <a href="/calendrier" className="hover:underline">
                  Calendrier scolaire
                </a>
              </li>
              <li>
                <a href="/equipe" className="hover:underline">
                  Équipe pédagogique
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/bibliotheque" className="hover:underline">
                  Bibliothèque numérique
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/aide" className="hover:underline">
                  Aide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/mentions-legales" className="hover:underline">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:underline">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/cgv" className="hover:underline">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} École Connect. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

