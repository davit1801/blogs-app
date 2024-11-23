import Container from '@/components/layout/container/Container';
import React, { PropsWithChildren } from 'react';

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-grow">
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
