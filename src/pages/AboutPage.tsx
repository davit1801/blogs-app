import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { t } from 'i18next';
import React from 'react';
import { GoBook } from 'react-icons/go';
import { SlEnergy, SlPeople } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lang = pathParts[1] || 'ka';
  return (
    <div className="mx-auto max-w-4xl space-y-12 py-8">
      <div className="py-8 text-center">
        <h1 className="pb-4 text-4xl font-bold">{t('about.about')}</h1>
        <p className="text-xl text-muted-foreground">{t('about.title')}</p>
      </div>
      <section>
        <h2 className="mb-8 text-center text-3xl font-semibold">
          {t('about.offer')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader>
              <GoBook className="lucide lucide-book-open mb-2 h-10 w-10 text-primary" />
              <CardTitle>{t('about.rich')}</CardTitle>
            </CardHeader>
            <CardDescription className="p-6 pt-0 text-sm text-muted-foreground">
              {t('about.rich-desc')}
            </CardDescription>
          </Card>

          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader>
              <SlPeople className="lucide lucide-book-open mb-2 h-10 w-10 text-primary" />
              <CardTitle>{t('about.vibrant')}</CardTitle>
            </CardHeader>
            <CardDescription className="p-6 pt-0 text-sm text-muted-foreground">
              {t('about.vibrant-desc')}
            </CardDescription>
          </Card>

          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader>
              <SlEnergy className="lucide lucide-book-open mb-2 h-10 w-10 text-primary" />
              <CardTitle>{t('about.cutting')}</CardTitle>
            </CardHeader>
            <CardDescription className="p-6 pt-0 text-sm text-muted-foreground">
              {t('about.cutting-desc')}
            </CardDescription>
          </Card>
        </div>
      </section>

      <section className="py-6">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold">{t('about.join-us')}</h2>
          <p className="mb-6 text-muted-foreground">{t('about.join-title')}</p>
          <Button asChild>
            <Link to={`/${lang}/register`}>{t('about.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
