import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ka';

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

dayjs.updateLocale('ka', {
  relativeTime: {
    future: '%sში',
    past: '%s წინ',
    s: 'რამდენიმე წამის',
    m: 'ერთი წუთის',
    mm: '%d წუთის',
    h: 'ერთი საათის',
    hh: '%d საათის',
    d: 'ერთი დღის',
    dd: '%d დღის',
    M: 'ერთი თვის',
    MM: '%d თვის',
    y: 'ერთი წლის',
    yy: '%d წლის',
  },
});

const getRelativeTime = (date: string, lang: string) => {
  dayjs.locale(lang);
  return dayjs(date).fromNow();
};

export const formatDate = (date: string, lang: string) => {
  const isMoreThanOneDay = dayjs(date).isBefore(dayjs().subtract(1, 'day'));
  const displayDate = isMoreThanOneDay
    ? dayjs(date).format('DD-MM-YYYY - HH:mm')
    : getRelativeTime(date, lang);

  return displayDate;
};
