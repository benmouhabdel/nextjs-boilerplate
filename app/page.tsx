export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre Espace Scolaire Numérique
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Restez connecté avec votre établissement, suivez vos cours et communiquez facilement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/connexion"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Se connecter
              </a>
              <a
                href="/inscription"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Rapides */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Messagerie</h3>
              <p className="text-gray-600">Communiquez facilement avec les enseignants et l'administration</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agenda</h3>
              <p className="text-gray-600">Consultez l'emploi du temps et les événements importants</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Documents</h3>
              <p className="text-gray-600">Accédez à vos ressources pédagogiques et documents importants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Actualités récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">Événement</span>
                  <h3 className="text-xl font-semibold mt-2">Titre de l'actualité {i}</h3>
                  <p className="text-gray-600 mt-2">
                    Description courte de l'actualité ou de l'événement à venir...
                  </p>
                  <a href={`/actualites/${i}`} className="inline-block mt-4 text-blue-600 hover:underline">
                    Lire la suite →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accès Rapide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Accès Rapide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Notes', icon: '📊' },
              { title: 'Devoirs', icon: '📚' },
              { title: 'Absences', icon: '📝' },
              { title: 'Cantine', icon: '🍽️' },
            ].map((item) => (
              <a
                key={item.title}
                href={`/${item.title.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center group"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}