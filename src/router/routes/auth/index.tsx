import IsAuthorizedGuard from '@/router/guards/IsAuthorizedGuard';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import AuthLoginViewLoader from '@/router/routes/auth/login';
import AuthRegisterViewLoader from '@/router/routes/auth/register';
import { Route } from 'react-router-dom';

export const AUTH_ROUTES = [
  <Route element={<IsAuthorizedGuard />}>
    <Route path={AUTH_PATHS.LOGIN} element={<AuthLoginViewLoader />} />,
    <Route path={AUTH_PATHS.REGISTER} element={<AuthRegisterViewLoader />} />,
  </Route>,
];
