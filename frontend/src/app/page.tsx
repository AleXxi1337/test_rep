import { Aboba } from '../features/Aboba';
import { Search } from 'lucide-react';

export const Page = () => {
  return (
    <div className="p-10 flex justify-center">
      <Aboba icon={Search}>Поиск</Aboba>
    </div>
  );
};
