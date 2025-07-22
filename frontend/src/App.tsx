import { Aboba } from './components/Aboba';
import { Search } from 'lucide-react';

export const App = () => {
  return (
    <div className="p-10 flex justify-center">
      <Aboba icon={Search}>Поиск</Aboba>
    </div>
  );
};
