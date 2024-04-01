import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  // Предполагаем, что у тебя есть массив с информацией о ценах
  const pricingOptions = [
    {
      plan: "Базовый",
      price: "Бесплатно",
      features: [
        "10 проектов",
        "1 ГБ хранения",
        "E-mail поддержка",
        "Помощь сообщества"
      ]
    },
    {
      plan: "Профессиональный",
      price: "$49/месяц",
      features: [
        "Неограниченное число проектов",
        "100 ГБ хранения",
        "Приоритетная поддержка",
        "Помощь сообщества"
      ]
    },
    // Добавь другие тарифные планы
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="text-center">Тарифы</h2>
          </div>
          {pricingOptions.map((option, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{option.plan}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    {option.price}
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn-lg btn-block btn-outline-primary">
                    Выбрать план
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
