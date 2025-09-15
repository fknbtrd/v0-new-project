export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">О нашем проекте</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Мы создали этот шаблон, чтобы помочь вам быстро запустить красивый и функциональный лендинг для вашего
              продукта или услуги. Каждый элемент тщательно продуман для максимальной конверсии и удобства
              пользователей.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Используйте современные технологии, адаптивный дизайн и оптимизированную производительность для достижения
              ваших бизнес-целей.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
