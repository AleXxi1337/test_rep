// export const App = () => {
//   return (
//     <>
//     </>
//   );
// };


// src/components/BadComponent.tsx
import React, { useState, useEffect } from 'react';

interface Props {
  show: boolean;
}
iiaaa
export const App: React.FC<Props> = ({ show }) => {
  const [count, setCount] = useState(0);
  const unusedVariable = 42; // ❌ не используется — сработает правило no-unused-vars

  if (show) {
    useEffect(() => {
      console.log('shown count:', count);
    }, []); // ❌ Использует count, но не указан в зависимости — нарушение react-hooks/exhaustive-deps
  }

  return <div>{count}</div>;
};