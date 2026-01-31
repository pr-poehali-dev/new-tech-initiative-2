import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    title: "Межкомнатные перегородки",
    description: "Стационарные и раздвижные металлические перегородки для зонирования пространства. Идеальны для лофтов, офисов и квартир-студий. Индивидуальный дизайн с геометрическими узорами.",
    image: "https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/645d193a-e95a-410c-989b-1b9d4134135e.jpg",
    badge: "Лофт стиль",
    features: ["Зонирование пространства", "Пропускают свет", "Уникальный дизайн"]
  },
  {
    title: "Крышки для кондиционеров",
    description: "Защитные решетки для внешних блоков кондиционеров. Изготовление по индивидуальным размерам. Порошковая окраска RAL любого цвета. Эстетика и защита техники.",
    image: "https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/977e78fe-9be8-4a41-aefe-8e908c82f076.jpg",
    badge: "Под заказ",
    features: ["Любые размеры", "Защита от погоды", "Цвет по RAL"]
  },
  {
    title: "Балконные ограждения и перила",
    description: "Прочные лестничные перила и балконные ограждения в стиле лофт. Сочетание металла с деревом и стеклом. Соответствие нормам безопасности. Монтаж по Краснодару.",
    image: "https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/58e8ee03-91a8-4a31-bdff-6f86e58f02fc.jpg",
    badge: "Безопасность",
    features: ["Прочная конструкция", "Минимализм", "ГОСТ стандарты"]
  },
  {
    title: "Лофт мебель",
    description: "Мебель в индустриальном стиле: каркасы кроватей, обеденные столы, стеллажи, консоли. Металлический каркас с элементами дерева. Прочность и уникальный дизайн для вашего интерьера.",
    image: "https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/117a607e-aa8a-4fda-8cde-79dc6d8f000e.jpg",
    badge: "Индивидуально",
    features: ["Металл + дерево", "Ручная работа", "Долговечность"]
  },
  {
    title: "Световые решения",
    description: "Дизайнерские светильники и люстры в лофт стиле. Уличные фонари, подвесные светильники, бра. Для дома, кафе, ресторанов. Сочетание металла и стекла.",
    image: "https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/40c850ca-051d-4c88-bb75-20c76922e0f2.jpg",
    badge: "Освещение",
    features: ["Для дома и бизнеса", "Уникальный дизайн", "Ручная работа"]
  }
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Наша продукция</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-space-mono">
            Металлоконструкции для дома и бизнеса. Полный цикл производства от чертежа до монтажа в Краснодаре и крае
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-2xl transition-all duration-300 slide-up bg-zinc-900 border-red-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-red-500 text-white border-0">
                    {product.badge}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white font-orbitron">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed mb-4 font-space-mono">
                  {product.description}
                </CardDescription>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 font-space-mono">
                      <span className="text-red-500">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
