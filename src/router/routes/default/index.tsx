import DefaultLayout from '@/layouts/default';
import AboutPageViewLoader from '@/router/routes/default/about';
import AuthorPageViewLoader from '@/router/routes/default/author';
import HomePageViewLoader from '@/router/routes/default/home';
import { DEFAULT_PATHS } from '@/router/routes/default/index.enum';
import ProfilePageViewLoader from '@/router/routes/default/profile';
import WritePageViewLoader from '@/router/routes/default/write';
import { Route } from 'react-router-dom';

export const DEFAULT_ROUTES = [
  <Route element={<DefaultLayout />}>
    <Route index element={<HomePageViewLoader />} />,
    <Route path={DEFAULT_PATHS.ABOUT} element={<AboutPageViewLoader />} />,
    <Route
      path={DEFAULT_PATHS.AUTHOR + '/:id'}
      element={<AuthorPageViewLoader />}
    />
    ,
    <Route path={DEFAULT_PATHS.PROFILE} element={<ProfilePageViewLoader />} />,
    <Route path={DEFAULT_PATHS.WRITE} element={<WritePageViewLoader />} />,
  </Route>,
];
