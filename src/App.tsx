import useAuth from '@/hooks/useAuth';
import RoutesComponent from '@/routes/RoutesComponent';

function App() {
  useAuth();

  return <RoutesComponent />;
}

export default App;
