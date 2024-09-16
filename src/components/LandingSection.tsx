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
  return (
    <section
      className='landing-section'
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <NavLink to={link || '/'} onClick={() => window.scrollTo(0, 0)}>
        <div className='overlay'>
          <div className='content'>
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
        </div>
      </NavLink>
    </section>
  );
};

export default LandingSection;
