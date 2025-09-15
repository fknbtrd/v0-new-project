export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-sidebar-primary mb-4">Ваш Логотип</div>
            <p className="text-sidebar-foreground mb-4 text-pretty">
              Создавайте удивительные лендинги с нашим современным шаблоном. Быстро, красиво, эффективно.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-sidebar-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground mb-4">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📧 hello@example.com</li>
              <li>📱 +7 (999) 123-45-67</li>
              <li>📍 Москва, Россия</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Ваш Проект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
