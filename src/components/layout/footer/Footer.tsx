import Container from '@/components/layout/container/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="px-4 py-6 text-center text-base text-muted-foreground">
          <p>
            © {year} {t('footer.copyright')}.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
