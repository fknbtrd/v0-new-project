import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Добро пожаловать в<span className="text-primary block">Ваш Проект</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Создайте что-то удивительное с нашим современным и чистым шаблоном лендинга. Настройте его под свои
          потребности и начните привлекать клиентов уже сегодня.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            Начать сейчас
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  )
}
