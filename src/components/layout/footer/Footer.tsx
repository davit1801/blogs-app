import Container from '@/components/container/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#d7d9e07f]">
      <Container>
        <div className="px-4 py-6 text-center text-base text-[#555868]">
          <p>
            © {year} {t('footer.copyright')}.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
