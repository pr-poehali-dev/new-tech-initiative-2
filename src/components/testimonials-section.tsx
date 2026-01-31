import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Александр Петров",
    role: "Владелец кафе «Индустрия», Краснодар",
    avatar: "/placeholder-user.jpg",
    content:
      "Заказывали перегородки в лофт стиле для зонирования кафе. Качество работы на высоте, монтаж выполнили точно в срок. Гости в восторге от дизайна!",
  },
  {
    name: "Марина Соколова",
    role: "Дизайнер интерьеров",
    avatar: "/placeholder-user.jpg",
    content:
      "Сотрудничаю с Городом Мастеров уже 3 года. Выполняют самые сложные проекты — от металлической мебели до декоративных перил. Рекомендую всем клиентам.",
  },
  {
    name: "Дмитрий Ковалев",
    role: "Владелец загородного дома",
    avatar: "/placeholder-user.jpg",
    content:
      "Делали балконные ограждения и крышки для кондиционеров. Всё идеально подошло по размерам, покраска RAL точно в цвет фасада. Работа профессионалов!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Отзывы клиентов</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Что говорят наши клиенты о работе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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