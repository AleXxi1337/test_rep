import { Aboba } from '../features/Aboba';
import { Search } from 'lucide-react';

export const Page = () => {
  return (
    <div className="p-10 flex gap-2 justify-center w-full h-screen">
      <Aboba icon={Search}>Поиск</Aboba>
    </div>
  );
};
