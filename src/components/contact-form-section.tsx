import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Icon from "@/components/ui/icon"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    privacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      alert("Необходимо согласие на обработку персональных данных")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Form submitted:", formData)
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        privacy: false
      })
      
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 font-orbitron">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 mb-8 font-space-mono leading-relaxed">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время для расчета стоимости и сроков.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 font-orbitron">Адрес</h3>
                  <p className="text-gray-300 font-space-mono">ул. Лизы Чайкиной, Краснодар</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 font-orbitron">Телефон</h3>
                  <a href="tel:+79892285629" className="text-gray-300 hover:text-red-500 transition-colors font-space-mono">
                    8 989 228 56 29
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 font-orbitron">Email</h3>
                  <a href="mailto:4768284slava@mail.ru" className="text-gray-300 hover:text-red-500 transition-colors font-space-mono break-all">
                    4768284slava@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Icon name="Clock" size={24} className="text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 font-orbitron">Режим работы</h3>
                  <p className="text-gray-300 font-space-mono">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-300 font-space-mono">Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://wa.me/79892285629" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-space-mono"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
              <a 
                href="https://t.me/+79892285629" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-space-mono"
              >
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>
          </div>

          <Card className="glow-border bg-zinc-900 border-red-500/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white font-orbitron">Форма обратной связи</CardTitle>
              <CardDescription className="text-gray-300 font-space-mono">
                Заполните форму, и мы перезвоним вам в течение дня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-space-mono">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 font-space-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-space-mono">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 font-space-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-space-mono">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 font-space-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white font-space-mono">Интересует</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-black border-red-500/20 text-white font-space-mono">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-red-500/20 text-white">
                      <SelectItem value="partitions">Межкомнатные перегородки</SelectItem>
                      <SelectItem value="covers">Крышки для кондиционеров</SelectItem>
                      <SelectItem value="railings">Ограждения и перила</SelectItem>
                      <SelectItem value="furniture">Лофт мебель</SelectItem>
                      <SelectItem value="lighting">Световые решения</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-space-mono">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш проект или задайте вопрос..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black border-red-500/20 text-white placeholder:text-gray-500 font-space-mono resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => setFormData({...formData, privacy: checked as boolean})}
                    className="border-red-500/20 data-[state=checked]:bg-red-500 mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed cursor-pointer font-space-mono">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#privacy" className="text-red-500 hover:text-red-400 underline">
                      политикой конфиденциальности
                    </a>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-6 text-lg border-0 font-space-mono"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                    <p className="text-green-500 font-space-mono">Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
                    <Icon name="AlertCircle" size={20} className="text-red-500 flex-shrink-0" />
                    <p className="text-red-500 font-space-mono">Произошла ошибка. Попробуйте позже или свяжитесь по телефону.</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}