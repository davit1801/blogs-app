import Container from '@/components/container/Container';
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#d7d9e07f]">
      <Container>
        <div className="px-4 py-6 text-center text-base text-[#555868]">
          <p>© {year} Blogs App. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
