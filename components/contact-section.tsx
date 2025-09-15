import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Готовы начать? Напишите нам, и мы поможем воплотить ваши идеи в жизнь
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-input border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-input border-border" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="bg-input border-border" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
