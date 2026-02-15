export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Отзывы</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «LogiFlow сократил наши расходы на логистику на 23%. Маршруты стали точнее, а клиенты получают грузы вовремя.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/placeholder-user.jpg"
              alt="Дмитрий Волков"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Дмитрий Волков</p>
            <p className="text-sm text-muted-foreground">Директор по логистике, «ТрансЭкспресс»</p>
          </div>
        </div>
      </div>
    </section>
  );
}
