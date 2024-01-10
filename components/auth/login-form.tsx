import React from 'react';
import CardWrapper from './card-wrapper';

type Props = {};

export const LoginForm = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
