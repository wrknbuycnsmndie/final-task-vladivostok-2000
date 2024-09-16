import { FC, ReactNode } from 'react';
import './LandingSectionGrid.css';

interface LandingSectionGridProps {
  children: ReactNode;
}

const LandingSectionGrid: FC<LandingSectionGridProps> = ({ children }) => {
  return <div className='section-grid'>{children}</div>;
};

export default LandingSectionGrid;
