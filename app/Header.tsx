export default function Header() {
  return (
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
  )
}

