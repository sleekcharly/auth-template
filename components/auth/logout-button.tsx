'use client';

import { logout } from '@/actions/logout';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const LogoutButton = ({ children }: Props) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
