import { Aboba } from '../features/Aboba';
import { Search } from 'lucide-react';
import { handleClick } from '../api/backend';

export const Page = () => {
  return (
    <div className="p-10 flex gap-2 justify-center w-full h-screen">
      <Aboba icon={Search} color="#222222" onClick={handleClick}>
        Поиск
      </Aboba>
    </div>
  );
};
