import { useState, useEffect } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      setCurrentDate(`${day}/${month.toString().padStart(2, '0')}`);
    };

    updateDate();

    const timer = setInterval(() => {
      updateDate();
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 text-center">
        <p className="font-bold text-sm sm:text-base text-white">
          Atenção: Hoje dia {currentDate} é o dia DECISIVO! Não deixe essa oportunidade escapar
        </p>
      </div>
    </div>
  );
}
