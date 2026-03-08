import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import LandingSection from '../components/LandingSection';
import SectionGrid from '../components/LandingSectionGrid';

const Home: FC = () => {
  return (
    <div className='home'>
      <header className='hero'>
        <div className='hero-content'>
          <h1>Владивосток — город на краю мира</h1>
          <p>
            Откройте для себя уникальный город, который является воротами России
            в Тихий океан.
          </p>
          <div className='hero-actions'>
            <NavLink to='/tourism' className='hero-action hero-action-primary'>
              Начать путешествие
            </NavLink>
            <NavLink
              to='/history-of-city'
              className='hero-action hero-action-secondary'
            >
              Узнать историю
            </NavLink>
          </div>
        </div>
      </header>

      <section className='home-intro'>
        <h2>Почему о Владивостоке интересно читать</h2>
        <p>
          Владивосток — это город, где в одном маршруте можно увидеть военную
          историю, современные мосты, университетский кампус и тихие бухты с
          морскими панорамами. Его развитие всегда шло на пересечении
          транспортных, культурных и международных процессов.
        </p>
        <p>
          Здесь особенно заметно, как география влияет на стиль жизни: сопки
          формируют городской рельеф, а море задает темп и настроение. Поэтому
          даже обычная прогулка по району превращается в небольшое путешествие с
          видами на заливы, мосты и корабли.
        </p>
        <p>
          На страницах этого проекта собраны материалы для неспешного знакомства
          с городом: история, маршруты, культурные особенности и местные
          гастрономические традиции.
        </p>
      </section>

      <SectionGrid>
        <LandingSection
          heading='Владивосток — сердце Дальнего Востока'
          description='Владивосток — один из самых уникальных городов России, известный своими потрясающими видами и богатой историей.'
          image='/vladivostok-image.jpg'
          link='/'
        />
        <LandingSection
          heading='История Владивостока'
          description='Город был основан в 1860 году и с тех пор стал ключевым портом и культурным центром на Дальнем Востоке.'
          image='/first-card-image.jpg'
          link='/history-of-city'
        />
        <LandingSection
          heading='Приморский край'
          description='Этот регион России славится своими природными красотами, включая леса, горы и океанические пейзажи.'
          image='/second-card-image.jpg'
          link='/tourism'
        />
        <LandingSection
          heading='Культура и Традиции'
          description='Владивосток богат культурными событиями и традициями, которые отражают его многонациональное население и историю.'
          image='/third-card-image.jpg'
          link='/culture-and-traditions'
        />
      </SectionGrid>
    </div>
  );
};

export default Home;
