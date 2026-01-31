import Icon from '@/components/ui/icon'

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Город <span className="text-red-500">Мастеров</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Полный цикл производства от чертежа до установки в Краснодаре и крае.
            </p>
            <div className="flex space-x-4 items-center">
              <a href="https://wa.me/79892285629" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="https://t.me/+79892285629" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Icon name="Send" size={24} />
              </a>
              <a href="mailto:4768284slava@mail.ru" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={24} />
              </a>
              <a href="tel:+79892285629" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Перегородки
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Крышки кондиционеров
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Ограждения
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Лофт мебель
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="font-space-mono text-gray-400">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">ул. Лизы Чайкиной, Краснодар</span>
                </div>
              </li>
              <li>
                <a href="tel:+79892285629" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">8 989 228 56 29</span>
                </a>
              </li>
              <li>
                <a href="mailto:4768284slava@mail.ru" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm break-all">4768284slava@mail.ru</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Форма связи
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2025 Город Мастеров. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#contact"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}