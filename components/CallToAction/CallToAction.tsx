import React from 'react'

const CallToAction = () => {
  return (
    <section className="cta">
        <div className="container">
          <h2 className="text-4xl text-center">Закажите уборку квартиры в Алматы</h2>
            <div className="cta__content flex items-strech justify-center gap-4 mt-12">
              <div className="flex-1 p-6 rounded-sm border">
                <h4 className="font-bold uppercase">1. Рассчитайте стоимость</h4>
                <p className="text-ring mt-4">Узнайте цену онлайн без лишних звонков</p>
              </div>
              <div className="flex-1 p-6 rounded-sm border">
                <h4 className="font-bold uppercase">2. Закажите уборку</h4>
                <p className="text-ring mt-4">Предоплата на сайте не нужна</p>
              </div>
              <div className="flex-1 p-6 rounded-sm border">
                <h4 className="font-bold uppercase">3. Уделите время близким</h4>
                <p className="text-ring mt-4">Пока опытный клинер делает уборку</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction