import Icon from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 font-orbitron">
              О компании <span className="text-red-500">Город Мастеров</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 font-space-mono leading-relaxed">
              Производство металлоконструкций в Краснодаре с полным циклом изготовления: от разработки чертежей до установки готовых изделий.
            </p>
            <p className="text-gray-300 mb-8 font-space-mono leading-relaxed">
              Наша компания специализируется на изготовлении межкомнатных перегородок, лофт мебели, балконных ограждений, лестничных перил и декоративных элементов из металла. Используем современное оборудование для лазерной резки ЧПУ, профессиональную сварку (аргон, полуавтомат) и порошковую окраску по каталогу RAL.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Award" size={24} className="text-red-500" />
                  <h3 className="text-white font-bold font-orbitron">Качество</h3>
                </div>
                <p className="text-gray-300 text-sm font-space-mono">Контроль на каждом этапе производства</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Zap" size={24} className="text-red-500" />
                  <h3 className="text-white font-bold font-orbitron">Скорость</h3>
                </div>
                <p className="text-gray-300 text-sm font-space-mono">Современное оборудование ЧПУ</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Wrench" size={24} className="text-red-500" />
                  <h3 className="text-white font-bold font-orbitron">Монтаж</h3>
                </div>
                <p className="text-gray-300 text-sm font-space-mono">Установка по Краснодару и краю</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Palette" size={24} className="text-red-500" />
                  <h3 className="text-white font-bold font-orbitron">Дизайн</h3>
                </div>
                <p className="text-gray-300 text-sm font-space-mono">Индивидуальные решения под ваш интерьер</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/316e385b-3687-44b7-972e-b49a79e32548/files/88372e03-a4ce-41bb-a88b-9fb2d63a3729.jpg"
                alt="Сварочные работы металлообработка"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-red-500 text-white p-8 rounded-lg shadow-xl border-4 border-black">
              <div className="text-5xl font-bold font-orbitron mb-2">10+</div>
              <div className="text-sm font-space-mono">лет опыта в металлообработке</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}