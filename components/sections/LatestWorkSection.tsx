export function LatestWorkSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── BLOCCO 1: Mytheresa Festive ── */}
        <div>
          <div className="text-center mb-6">
            <p className="text-xs tracking-[0.3em] text-[#c9a84c] uppercase mb-4">
              Latest Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Mytheresa Festive
            </h2>
            <p className="text-white/50 text-sm mb-1">Rome, Italy — Festive Campaign</p>
            <p className="text-white/30 text-xs">
              Location Management & Permit Coordination — Rome Historic Center
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <img
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/01-mytheresa-festive-roma-street.jpg"
                alt="Mytheresa Festive Campaign — Rome street fashion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <img
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/02-mytheresa-festive-roma-suit.jpg"
                alt="Mytheresa Festive Campaign — Rome fashion editorial"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <img
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/03-mytheresa-festive-roma-lace.jpg"
                alt="Mytheresa Festive Campaign — Rome evening wear"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <img
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/04-mytheresa-festive-roma-jewels.jpg"
                alt="Mytheresa Festive Campaign — Rome luxury jewelry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <video
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/05-mytheresa-festive-roma-reel1.mp4"
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline preload="metadata"
              />
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <video
                src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/06-mytheresa-festive-roma-reel2.mp4"
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline preload="metadata"
              />
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="text-white/30 text-xs">Client:</span>
              <span className="text-white/60 text-xs font-medium">Mytheresa</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-white/30 text-xs">Production:</span>
              <span className="text-white/60 text-xs font-medium">Pierce & Pierce</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-white/30 text-xs">Location Manager:</span>
              <span className="text-[#c9a84c]/80 text-xs font-medium">Italy Locations</span>
            </div>
          </div>
          <p className="text-center text-white/25 text-[11px] mt-3">
            Full permit coordination for Rome historic center — Municipio I
          </p>
        </div>

        {/* Separatore */}
        <div className="border-t border-white/5 my-16" />

        {/* ── BLOCCO 2: HNB Cosmetics ── */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              A 60&apos;s Italian Love Story
            </h2>
            <p className="text-white/50 text-sm mb-1">
              Amalfi Coast, Italy — Atrani, Minori, Cetara
            </p>
            <p className="text-white/30 text-xs">
              Location Scouting & Permit Coordination — Amalfi Coast
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <video
              src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/hnb-cosmetics/hnb-cosmetics-amalfi-coast.mp4"
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline preload="metadata"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="text-white/30 text-xs">Client:</span>
              <span className="text-white/60 text-xs font-medium">HNB Cosmetics</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-white/30 text-xs">Director:</span>
              <span className="text-white/60 text-xs font-medium">Sacha Ferrer</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-white/30 text-xs">Production:</span>
              <span className="text-white/60 text-xs font-medium">Nreal & MM Productions</span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-white/30 text-xs">Location Scouting & Permits:</span>
              <span className="text-[#c9a84c]/80 text-xs font-medium">Italy Locations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
