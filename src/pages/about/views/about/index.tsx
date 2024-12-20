import { Button } from '@/components/ui/button';
import OfferCard from '@/pages/about/components/OfferCard';
import { DEFAULT_PATHS } from '@/router/routes/default/index.enum';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-8">
      <div className="py-8 text-center">
        <h1 className="pb-4 text-4xl font-bold">{t('about.about')}</h1>
        <p className="text-xl text-muted-foreground">{t('about.title')}</p>
      </div>

      <section>
        <h2 className="mb-8 text-center text-3xl font-semibold">
          {t('about.offer')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <OfferCard name="rich" />
          <OfferCard name="vibrant" />
          <OfferCard name="cutting" />
        </div>
      </section>

      <section className="py-6">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold">{t('about.join-us')}</h2>
          <p className="mb-6 text-muted-foreground">{t('about.join-title')}</p>
          <Button asChild>
            <Link to={`/${lang}/${DEFAULT_PATHS.WRITE}`}>
              {t('about.button')}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
