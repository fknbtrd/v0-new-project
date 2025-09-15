import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Анна Иванова",
      role: "CEO, TechStart",
      content: "Отличный шаблон! Помог нам быстро создать профессиональный лендинг и увеличить конверсию на 40%.",
      avatar: "👩‍💼",
    },
    {
      name: "Михаил Петров",
      role: "Маркетолог",
      content: "Современный дизайн и отличная производительность. Рекомендую всем, кто хочет качественный результат.",
      avatar: "👨‍💻",
    },
    {
      name: "Елена Сидорова",
      role: "Дизайнер",
      content: "Очень понравилась цветовая схема и типографика. Легко кастомизировать под любой бренд.",
      avatar: "👩‍🎨",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Узнайте, что говорят о нас наши пользователи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <p className="text-card-foreground mb-4 text-pretty">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
