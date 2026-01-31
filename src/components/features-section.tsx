import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Лазерная резка ЧПУ",
    description: "Высокоточная резка металла толщиной до 20 мм. Сложные геометрические формы и узоры.",
    icon: "zap",
    badge: "Точность",
  },
  {
    title: "Сварочные работы",
    description: "Аргоновая сварка и полуавтомат. Прочные и акуратные швы для любых конструкций.",
    icon: "link",
    badge: "Прочность",
  },
  {
    title: "Порошковая окраска",
    description: "Профессиональная покраска по RAL. Долговечное покрытие, устойчивое к коррозии.",
    icon: "target",
    badge: "RAL",
  },
  {
    title: "Индивидуальный дизайн",
    description: "Разработка уникальных конструкций по вашим чертежам и пожеланиям.",
    icon: "brain",
    badge: "Лофт",
  },
  {
    title: "Полный цикл производства",
    description: "От эскиза до установки. Контроль качества на каждом этапе.",
    icon: "globe",
    badge: "Качество",
  },
  {
    title: "Монтаж и доставка",
    description: "Профессиональная установка по Краснодару и краю. Доставка по России.",
    icon: "lock",
    badge: "Сервис",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Технологии и возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Широкие технологические возможности для реализации любых идей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}