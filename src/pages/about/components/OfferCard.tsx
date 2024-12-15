import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { t } from 'i18next';
import React from 'react';
import { GoBook } from 'react-icons/go';

type PropsType = {
  name: string;
};

const OfferCard: React.FC<PropsType> = ({ name }) => {
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow">
      <CardHeader>
        <GoBook className="lucide lucide-book-open mb-2 h-10 w-10 text-primary" />
        <CardTitle>{t(`about.${name}`)}</CardTitle>
      </CardHeader>
      <CardDescription className="p-6 pt-0 text-sm text-muted-foreground">
        {t(`about.${name}-desc`)}
      </CardDescription>
    </Card>
  );
};

export default OfferCard;
