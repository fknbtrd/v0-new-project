import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Современный дизайн",
      description: "Чистый и современный интерфейс, который привлекает внимание пользователей",
      icon: "🎨",
    },
    {
      title: "Адаптивность",
      description: "Идеально работает на всех устройствах - от мобильных до десктопов",
      icon: "📱",
    },
    {
      title: "Быстрая загрузка",
      description: "Оптимизированная производительность для лучшего пользовательского опыта",
      icon: "⚡",
    },
    {
      title: "Легкая настройка",
      description: "Простая кастомизация под ваши потребности и брендинг",
      icon: "⚙️",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Ключевые возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Все что нужно для создания успешного онлайн-присутствия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
