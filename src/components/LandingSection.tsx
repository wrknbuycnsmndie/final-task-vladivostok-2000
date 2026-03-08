import { FC } from 'react';
import './LandingSection.css';
import { NavLink } from 'react-router-dom';

interface LandingSectionProps {
  heading: string;
  description: string;
  image?: string; // Optional image prop
  link?: string; // Optional link prop
}

const LandingSection: FC<LandingSectionProps> = ({
  heading,
  description,
  image,
  link,
}) => {
  const sectionClassName = `landing-section ${image ? '' : 'landing-section--plain'}`;

  return (
    <section
      className={sectionClassName}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <NavLink
        className='landing-link'
        to={link || '/'}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className='overlay'>
          <div className='content'>
            <p className='landing-eyebrow'>Путеводитель</p>
            <h2>{heading}</h2>
            <p>{description}</p>
            <span className='landing-arrow'>Открыть раздел →</span>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

export default LandingSection;
