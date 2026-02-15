export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/30cde391-2380-4cad-a79e-1e3388c8576d/files/c6cfbf5a-3929-4ee6-90d0-cededa8a99e5.jpg"
              alt="Панель управления логистикой"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Когда каждый маршрут оптимален, а каждый груз под контролем — бизнес растёт сам собой.»
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">Наш подход</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Точные маршруты. Полный контроль.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                LogiFlow создан из понимания: в логистике каждый лишний километр — это потерянные деньги и время. Мы анализируем пробки, погоду, ограничения по весу и таможенные нюансы, чтобы каждая доставка шла по лучшему пути.
              </p>
              <p>
                Платформа объединяет управление заказами, GPS-трекинг и умную маршрутизацию в одном окне — чтобы вы фокусировались на росте бизнеса, а не на ручном планировании.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Возможности платформы</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
