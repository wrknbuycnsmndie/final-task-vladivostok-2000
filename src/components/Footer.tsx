import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-grid'>
          <section className='footer-card footer-card-author'>
            <p className='footer-eyebrow'>Автор проекта</p>
            <p className='footer-title'>Антон Чапала</p>
            <p className='footer-subtitle'>Группа ДПО-33</p>
            <p className='footer-text'>Where is my mind?</p>
            <div className='footer-links' aria-label='Ссылки автора'>
              <a
                className='footer-link'
                href='https://github.com/wrknbuycnsmndie'
                target='_blank'
                rel='noreferrer'
              >
                GitHub · wrknbuycnsmndie
              </a>

              <a
                className='footer-link'
                href='https://x.com/wrknbuycnsmndie'
                target='_blank'
                rel='noreferrer'
              >
                X · @wrknbuycnsmndie
              </a>
            </div>
          </section>

          <section className='footer-card'>
            <p className='footer-eyebrow'>О проекте</p>
            <p className='footer-card-title'>Владивосток 2000</p>
            <p className='footer-text'>
              Всё что вы хотели знать о Владивостоке, но боялись загуглить, без
              запаха рыбы и морепродуктов, зато бесплатно.
            </p>
          </section>

          <section className='footer-card'>
            <p className='footer-eyebrow'>Атмосфера города</p>
            <p className='footer-card-title'>Мини-легенды Владивостока</p>
            <p className='footer-text'>
              Говорят, что у каждого моста Владивостока есть свой характер: один
              встречает рассвет, второй охраняет бухту. Учёные до сих пор не
              могут объяснить, почему Рудневский мост ещё стоит. Местные
              объясняют просто: привык.
            </p>
          </section>
        </div>

        <p className='footer-meta'>wrknbuycnsmndie © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
