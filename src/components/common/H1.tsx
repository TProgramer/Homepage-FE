import React from 'react';
import { _H1 } from '../../styles/common';

interface H1Props {
  center?: boolean;

  children?: React.ReactNode;
}

const H1 = ({ center, children }: H1Props) => (
  <_H1 style={{ textAlign: center ? 'center' : 'left' }}>{children}</_H1>
);

export default H1;
