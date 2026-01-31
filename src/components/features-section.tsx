import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Лазерная резка ЧПУ",
    description: "Высокоточная резка металла до 20 мм. Сложные узоры и геометрические формы любой сложности",
    icon: "Zap",
    badge: "Точность",
    color: "purple"
  },
  {
    title: "Сварочные работы",
    description: "Аргоновая сварка TIG и полуавтомат. Прочные идеальные швы для любых конструкций",
    icon: "Flame",
    badge: "Прочность",
    color: "purple"
  },
  {
    title: "Порошковая окраска",
    description: "Профессиональная покраска по каталогу RAL. Долговечное антикоррозийное покрытие",
    icon: "Paintbrush",
    badge: "RAL",
    color: "purple"
  },
  {
    title: "Индивидуальный дизайн",
    description: "Разработка уникальных конструкций по вашим эскизам. Воплощаем любые идеи",
    icon: "PenTool",
    badge: "Лофт",
    color: "purple"
  },
  {
    title: "Полный цикл",
    description: "От чертежа до монтажа. Контроль качества на каждом этапе производства",
    icon: "Settings",
    badge: "Качество",
    color: "purple"
  },
  {
    title: "Монтаж и доставка",
    description: "Профессиональная установка по Краснодару и краю. Доставка по России",
    icon: "Truck",
    badge: "Сервис",
    color: "purple"
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Технологии и возможности
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-space-mono">
            Широкие технологические возможности для изготовления деталей и обработки материалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-900/80 border-purple-500/20 hover:border-purple-400/50 hover:shadow-purple-500/20 hover:shadow-xl transition-all duration-500 slide-up group backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-purple-500/10 p-4 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Icon name={feature.icon} size={32} className="text-purple-400" />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30 font-space-mono">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white font-orbitron group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed font-space-mono">
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