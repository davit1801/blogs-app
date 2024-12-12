import RoutesComponent from '@/router/RoutesComponent';
import useAuth from '@/hooks/useAuth';

function App() {
  useAuth();
  return <RoutesComponent />;
}

export default App;
