import { FC } from 'react';
import './CultureAndTraditions.css';

const CultureAndTraditions: FC = () => {
  return (
    <div className='culture-page'>
      <section className='hero-section'>
        <h1>Культура и Традиции Владивостока</h1>
        <p>
          Погрузитесь в уникальную культуру и традиции города Владивостока, где
          Восток встречается с Западом.
        </p>
      </section>

      <section className='traditional-events'>
        <h2>Традиционные события</h2>
        <div className='event'>
          <h3>Международный Восточный Экономический Форум (ВЭФ)</h3>
          <p>
            Одно из самых значимых событий, которое ежегодно проводится во
            Владивостоке, привлекая мировых лидеров и представителей бизнеса.
          </p>
        </div>
        <div className='event'>
          <h3>Празднование Нового года по восточному календарю</h3>
          <p>
            Владивосток активно празднует Новый год по восточному календарю, что
            подчеркивает его близость к странам Азии.
          </p>
        </div>
        <div className='event'>
          <h3>День Тихоокеанского Флота</h3>
          <p>
            Этот день отмечается каждый год в мае и символизирует гордость
            Владивостока за свою военно-морскую историю.
          </p>
        </div>
      </section>

      <section className='local-arts'>
        <h2>Местное искусство</h2>
        <p>
          Во Владивостоке активно развиваются различные направления искусства —
          от театра и кино до уличных инсталляций.
        </p>
        <ul>
          <li>Приморский театр оперы и балета</li>
          <li>Музей современного искусства "Артэтаж"</li>
          <li>Ежегодный кинофестиваль "Меридианы Тихого"</li>
        </ul>
      </section>

      <section className='culinary-traditions'>
        <h2>Кулинарные традиции</h2>
        <p>
          Владивосток известен своим разнообразием морепродуктов и блюдами, в
          которых сочетаются русские и азиатские кулинарные традиции.
        </p>
        <ul>
          <li>Краб и другие морепродукты</li>
          <li>Блюда, вдохновленные азиатской кухней, такие как суши и рамен</li>
          <li>Традиционные русские пельмени</li>
        </ul>
      </section>
    </div>
  );
};

export default CultureAndTraditions;
