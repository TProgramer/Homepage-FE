import React from 'react';
import { _P } from '../../styles/common';

interface PProps {
  center?: boolean;

  children?: React.ReactNode;
}

const P = ({ center, children }: PProps) => (
  <_P style={{ textAlign: center ? 'center' : 'left' }}>{children}</_P>
);

export default P;
