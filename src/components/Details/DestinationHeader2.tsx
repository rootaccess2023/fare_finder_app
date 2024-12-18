import { useState, useEffect } from "react";

export function DestinationHeader2() {

  const [currentDate, setCurrentDate] = useState<string>("");

  const getDate = () => {
    const today = new Date();
    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
    const month = today.toLocaleDateString('en-US', { month: 'long' });
    const day = today.getDate();
    const year = today.getFullYear();

    return `${weekday} ${month} ${day}, ${year}`;
  };


  useEffect(() => {
    setCurrentDate(getDate());
  }, []);

  return (
    <header className="h-[42px] flex items-center justify-center bg-[#f7f7f8] border-b lg:hidden">
      <h2 className="font-light text-sm text-[#515164]">{currentDate}</h2>
    </header>
  );
}
