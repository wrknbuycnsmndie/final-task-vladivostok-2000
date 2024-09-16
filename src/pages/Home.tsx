import { FC } from 'react';
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
        </div>
      </header>
      <SectionGrid>
        <LandingSection
          heading='Владивосток — сердце Дальнего Востока'
          description='Владивосток — один из самых уникальных городов России, известный своими потрясающими видами и богатой историей.'
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
