import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие услуги вы предоставляете?",
      answer:
        "Мы специализируемся на полном цикле производства металлоконструкций: лазерная резка ЧПУ, сварочные работы (аргон, полуавтомат), порошковая окраска RAL, изготовление межкомнатных перегородок, лофт мебели, балконных ограждений, крышек для кондиционеров и декоративных элементов. Также выполняем монтаж по Краснодару и Краснодарскому краю.",
    },
    {
      question: "Сколько стоит изготовление металлоконструкций?",
      answer:
        "Стоимость зависит от сложности проекта, размеров, материалов и типа покрытия. Для точного расчета оставьте заявку на сайте или позвоните нам — мы бесплатно подготовим смету в течение 1-2 дней после замера.",
    },
    {
      question: "Какие сроки изготовления?",
      answer:
        "Срок производства зависит от сложности заказа. Стандартные изделия изготавливаются за 5-10 рабочих дней, сложные проекты — до 3 недель. Точные сроки озвучиваем после согласования чертежей.",
    },
    {
      question: "Выполняете ли монтаж готовых изделий?",
      answer:
        "Да, мы выполняем профессиональный монтаж всех изготовленных конструкций по Краснодару и Краснодарскому краю. Монтаж включен в стоимость при заказе полного комплекса услуг.",
    },
    {
      question: "Можно ли заказать изделие по своему эскизу?",
      answer:
        "Конечно! Мы работаем как по готовым эскизам и чертежам клиента, так и разрабатываем индивидуальные проекты с нуля. Наши специалисты помогут воплотить любую идею в металле.",
    },
    {
      question: "В какой цвет можно покрасить металлоконструкции?",
      answer:
        "Используем профессиональную порошковую окраску по каталогу RAL. Вы можете выбрать любой цвет из палитры — более 200 оттенков. Покрытие устойчиво к коррозии и механическим повреждениям.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о производстве металлоконструкций в Краснодаре
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}