"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Factory, DollarSign, X } from "lucide-react"
import Head from "next/head"

export default function LiderBetonPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [selectedAdvantage, setSelectedAdvantage] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/xldwkrql", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // высота навигационной панели
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const targetPosition = Math.max(0, absoluteElementTop - navHeight) // Убедимся что позиция не отрицательная

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const advantages = [
    {
      id: "production",
      title: "Собственное производство",
      icon: Factory,
      description:
        "Весь бетон производится на современном, технологичном оборудовании в соответствии с положениями ГОСТа. Производственные мощности выпускают до 60 м3 продукции в час. Все компоненты отличаются достойным качеством и экологичностью. Наша компания производит бетон с широким диапазоном эксплуатационных характеристик.",
    },
    {
      id: "gost",
      title: "Соблюдение требований и норм ГОСТа",
      icon: ({ className }: { className?: string }) => (
        <div
          className={`${className} flex items-center justify-center font-bold text-xs bg-accent text-white rounded px-1`}
        >
          ГОСТ
        </div>
      ),
      description:
        "Все смеси сертифицированы. Аттестованная лаборатория осуществляет контроль качества продукции. Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами. Экспертная группа завода тщательно подходят к выбору сырья и химических добавок, предоставляющих возможность производить бетон самого высокого качества.",
    },
    {
      id: "prices",
      title: "Приемлемые цены",
      icon: DollarSign,
      description:
        "Благодаря закупке сырья напрямую с заводов изготовителей, а также наличию собственного автопарка, своим клиентам мы предлагаем продукцию самого высокого качества по доступной цене.",
    },
    {
      id: "delivery-transport",
      title: "Доставка собственным транспортом",
      icon: ({ className }: { className?: string }) => (
        <img src="/images/concrete-mixer-icon.png" alt="Бетономешалка" className={`${className} object-contain`} />
      ),
      description:
        "Собственный автопарк новых импортных АБС (автобетоносмесителей) позволяет нам доставлять бетон заказчику (до 90 км.) с сохранением его качественных характеристик. Собственные бетонососы (26-52м.) позволяют перекачать большой объём бетона за короткий срок в стесненных условиях. Благодаря этому наши клиенты экономят время и деньги на укладке бетона.",
    },
  ]

  const products = [
    {
      id: "m100",
      title: "Бетон М100",
      specs: "В7,5 П4 ГОСТ 7473-2010",
      image: "/images/concrete-m100.png",
      description:
        "М100 – используется для объектов, которые в дальнейшем будут подвергаться минимальным нагрузкам\n-для установки и укрепления бордюров;\n-для создания подстилающего слоя тротуаров и пешеходных дорожек, заливка столбов;\n-при изготовлении подстилающего слоя дорожного покрытия, где предполагается -невысокая интенсивность движения и нагрузка транспорта, например, в условиях сельской местности, парковых зон или дачных участков;\n-для подготовительных работ по созданию фундаментов и заливке монолитных плит;\n-в качестве отделки внутренних помещений, в основном технического или хозяйственного назначения;\n-для внешней отделки зданий и сооружений, эксплуатация которых предполагает благоприятные климатические условия;\n-при различных видах ремонта зданий, жилых помещений, различных дорог и инфраструктурных объектов\n\nГлавным достоинством такой смеси является низкая стоимость и достаточная прочность. Мы предлагаем купить бетон М100 для создания защитного выравнивающего слоя под основной фундамент, основание дороги, для укрепления бордюров.",
    },
    {
      id: "m150",
      title: "Бетон М150",
      specs: "В12,5 П4 ГОСТ 7473-2010",
      image: "/images/concrete-m150.png",
      description:
        "Несмотря на средние строительные качества, бетон В10 крайне популярен. Это связано с тем, что смесь является отличным материалом для подготовки строительной площадки.\nТакой тип бетона используют:\nперед установкой бордюров;\nперед заливкой садовых дорожек;\nпри заливке стяжки полов;\nдля обработки поверхности под монолитные плиты и фундаменты.\nИтак, бетон М150 играет достаточно важную роль в любом строительстве, обеспечивая устойчивость и прочность поверхности, на которой будет происходить дальнейшее возведение конструкций.",
    },
    {
      id: "m200",
      title: "Бетон М200",
      specs: "В15 П4 F75 W2 ГОСТ 7473-2010",
      image: "/images/concrete-m200.png",
      description:
        "Применяется для стяжки и изготовления бетонных полов.\nИспользуется при создании фундаментов зданий. Его используют для строительства загородных домов и дач, т.е. малонагруженных конструкций\nШироко применяется для возведения железобетонных изделий, так как может обеспечить высокие эксплуатационные параметры. Блоки и плиты, изготовленные с помощью такого бетона, не рекомендуется использовать в местах с повышенной нагрузкой, однако, их можно использовать для создания лестниц и подпорных стен.\nПрименяется для возведения площадок, дорожек и других подобных конструкций.\nПрименяется для изготовления дорожных плит, так как превосходно сочетается с металлическим каркасом",
    },
    {
      id: "m250",
      title: "Бетон М250",
      specs: "В20 П4 F1OO W2 ГОСТ 7473-2010",
      image: "/images/concrete-m250.png",
      description:
        "М250 положительные качества этого бетона полностью реализуются при проведении таких работ, как:\nзаливка фундаментов для многоэтажных зданий. Конечно, если строго принимать во внимание требования нормативных актов, необходимо использовать бетон более высокой марки. Однако, в случаях ограниченного бюджета, М250 вполне подойдет – его применение не снизит эксплуатационных качеств постройки;\nизготовление элементов зданий, плит или блоков. При использовании готовых конструкций подобного типа можно значительно ускорить строительство;\nпокрытие дорожек или площадок. Бетон В20 имеет крайне высокие показатели износостойкости и сопротивления воздействиям окружающей среды.\nЕсли возникла необходимость в проведении одной из вышеназванных работ, приобрести подходящий тип раствора можно в нашей компании. Цена бетона М-250 с доставкой приятно удивит любого покупателя.",
    },
    {
      id: "m300",
      title: "Бетон М300",
      specs: "В22,5 П4 F150 W4 ГОСТ 7473-2010",
      image: "/images/concrete-m300.png",
      description:
        "Бетон М300 имеет высокую прочность, водостойкость, отлично переносит морозы. Все это и определило область его использования. Его применяют:\n-При заливке фундаментов частных домов и коттеджей.\n-Для отмостки вокруг дома.\n-Для садовых дорожек, изготовления самодельных плит для дорожек.\nБетон М300 B22.5 применяется широко как в частном, так и в многоэтажном строительстве\nПри изготовлении бетонных лестниц.\nДля бетонирования площадки под авто.\nДля монолитных стен и перекрытий в многоэтажных домах.",
    },
    {
      id: "m350",
      title: "Бетон М350",
      specs: "В25 П4 F200 W6 ГОСТ 7473-2010",
      image: "/images/concrete-m350.png",
      description:
        "Прочность на сжатие позволяет выбирать М350 для возведения ответственных несущих конструкций в многоэтажном и промышленном строительстве. Из него отливают фундаменты (свайные и заглубленные ленточные), монолитные стены, колонны и ж/б балки, воспринимающие повышенные нагрузки.\nХорошо показывает себя в производстве многопустотных ЖБИ, например, плит перекрытия. Из-за внутренних каналов общий вес таких изделий снижается, а применение В25 позволяет компенсировать потерю несущей способности.\nВысокая водонепроницаемость и морозостойкость открывают путь к использованию в строительстве конструкций, испытывающих одновременно и повышенные нагрузки, и влияние экстремальных внешних факторов. Такое сочетание свойств идеально для заливки аэродромных плит, дорог для грузового и спецтранспорта, пролетов мостов.",
    },
    {
      id: "m400",
      title: "Бетон М400",
      specs: "В30 П4 F300 W8 ГОСТ 7473-2010",
      image: "/images/concrete-m400.png",
      description:
        "Железнодорожные мосты, автомобильные эстакады, виадуки, путепроводы и пр.\nСтроительство банковских хранилищ.\nПроизводство несущих элементов: колонн, свай, арок, ригелей, перемычек, балок и пр.\nСтроительство гидротехнических сооружений: коллекторов, шлюзов, бассейнов, плотин, волнорезов и прочих объектов специального назначения.\nСтроительство монолитных многоэтажных зданий и производство ответственных ЖБИ.\nОбустройство всех типов фундаментов (ленточные, свайные, плитные)",
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Лидер Бетон",
    description:
      "Производство и доставка бетона всех марок в Каневской. Бетонный завод с собственным автопарком миксеров и бетонососов.",
    url: "https://lider-beton.vercel.app",
    telephone: "+7-918-360-10-10",
    email: "lider360@bk.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Широкая, д. 247",
      addressLocality: "ст. Каневская",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.0833",
      longitude: "38.9167",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$$",
    areaServed: "Каневская и окрестности до 90 км",
    serviceType: "Производство и доставка бетона",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Бетон и строительные материалы",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Товарный бетон всех марок (М100, М150, М200, М250, М300, М350)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Цементный раствор для кладки и штукатурки",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Фундаментные блоки ФБС",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Щебень и песок с доставкой",
          },
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-sm border-b border-border z-50"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/images/lider-beton-logo-header.png"
                alt="Лидер Бетон - Бетонный завод в Каневской"
                className="h-6 md:h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Главная
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("products")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Продукция
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a
                href="tel:89183601010"
                className="text-accent font-semibold hover:text-accent/80 transition-colors text-sm md:text-base whitespace-nowrap"
              >
                8 (918) 360-10-10
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/concrete-plant-bg-new.jpg')",
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/60 md:mx-32 md:my-40 md:border-4 md:border-blue-800" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-6 gap-4">
            <img
              src="/images/lider-beton-logo-new.png"
              alt="Лидер Бетон - Производство бетона в Каневской"
              className="h-22 md:h-32 w-auto"
            />
            <h1
              className="text-3xl sm:text-5xl md:text-8xl font-bold text-balance drop-shadow-lg leading-tight"
              style={{
                filter:
                  "drop-shadow(2px 2px 0px #1e3a8a) drop-shadow(-2px -2px 0px #1e3a8a) drop-shadow(2px -2px 0px #1e3a8a) drop-shadow(-2px 2px 0px #1e3a8a)",
                textShadow: "0 0 8px rgba(30, 58, 138, 0.5)",
              }}
            >
              ЛИДЕР БЕТОН
            </h1>
          </div>
          <p className="text-base md:text-2xl mb-2 max-w-4xl text-pretty leading-relaxed drop-shadow-md font-bold text-center mx-auto">
            Ведущий производитель бетона для тех, кто ценит качество
          </p>

          <h3 className="text-xl md:text-3xl font-bold mb-4 text-white bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3 inline-block shadow-lg">
            Информация о нас
          </h3>

          <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-md">
            Компания «ЛИДЕР» является производителем бетонных смесей, ориентированным на строительный рынок Каневского
            района + 90 км. Мы предлагаем качественный бетон на выгодных условиях, долгосрочное сотрудничество и
            гарантию качества всей поставляемой продукции.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-black/20 backdrop-blur-sm shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon
              return (
                <Card
                  key={advantage.id}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full w-full"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      {typeof IconComponent === "function" ? (
                        <IconComponent className="h-8 w-8 text-accent" />
                      ) : (
                        <IconComponent className="h-8 w-8 text-accent" />
                      )}
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end p-6">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent mt-auto"
                      onClick={() => setSelectedAdvantage(advantage.id)}
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Наша продукция</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
              >
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{product.specs}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end p-6 gap-2">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    Область применения
                  </Button>
                  <Button variant="default" className="w-full" onClick={() => scrollToSection("contact")}>
                    Задать вопрос
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {products.find((p) => p.id === selectedProduct)?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {products.find((p) => p.id === selectedProduct)?.specs}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {products.find((p) => p.id === selectedProduct)?.description}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic text-center">
                  Информация носит исключительно информационный характер и не является рекомендацией
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setSelectedProduct(null)}>Закрыть</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Advantage Modal */}
      {selectedAdvantage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary">
                  {advantages.find((a) => a.id === selectedAdvantage)?.title}
                </h3>
                <button
                  onClick={() => setSelectedAdvantage(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {advantages.find((a) => a.id === selectedAdvantage)?.description}
              </p>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setSelectedAdvantage(null)}>Закрыть</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Свяжитесь с нами</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_to" value="lider360@bk.ru" />
                  <input type="hidden" name="_subject" value="Новая заявка с сайта Лидер Бетон" />
                  <input type="hidden" name="_next" value="https://lider-beton.vercel.app" />
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ваш комментарий или вопрос"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                      Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      Произошла ошибка при отправке. Попробуйте еще раз или позвоните нам напрямую.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      backgroundColor: isSubmitting ? "#9ca3af" : "#1e40af",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#1d4ed8"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#1e40af"
                      }
                    }}
                  >
                    {isSubmitting ? "Отправляется..." : "Отправить сообщение"}
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Телефон</h4>
                      <a href="tel:89183601010" className="text-accent hover:text-accent/80 transition-colors text-lg">
                        8 (918) 360-10-10
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a
                        href="mailto:lider360@bk.ru"
                        className="text-accent hover:text-accent/80 transition-colors text-lg"
                      >
                        lider360@bk.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Режим работы</h4>
                      <p className="text-muted-foreground">Пн - Сб: 8:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Адрес</h4>
                      <p className="text-muted-foreground">Россия, ст. Каневская, ул. Широкая, д. 247</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Перенес карту в самый низ */}
      <section id="map" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Мы на карте</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A72227188635&amp;source=constructor&ll=39.017399%2C46.078879&z=16&pt=39.017399,46.078879,pm2rdm&text=%D0%9B%D0%98%D0%94%D0%95%D0%A0%20%D0%91%D0%95%D0%A2%D0%9E%D0%9D"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта расположения Лидер Бетон - производство бетона"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-muted-foreground flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                ЛИДЕР БЕТОН - Россия, ст. Каневская, ул. Широкая, д. 247
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Лидер Бетон. Все права защищены.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <a href="tel:89183601010" className="hover:text-accent transition-colors">
                8 (918) 360-10-10
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
