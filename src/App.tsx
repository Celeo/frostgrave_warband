import React, { useState } from "react";

export const App = () => {
  const [tab, setTab] = useState(0);

  const tabButtonClasses = (index: number): string =>
    `h-10 w-1/4 font-medium flex items-center justify-center text-black ${
      index === tab ? "bg-blue-300" : "bg-blue-100"
    }`;

  const tabViewClasses = (index: number): string =>
    index === tab ? "" : "hidden";

  return (
    <div className="mx-auto">
      <h1 className="text-2xl text-center py-1 bg-blue-600">
        Frostgrave Warband
      </h1>
      <div className="flex flex-row justify-between">
        <button className={tabButtonClasses(0)} onClick={() => setTab(0)}>
          Wizard
        </button>
        <button className={tabButtonClasses(1)} onClick={() => setTab(1)}>
          Apprentice
        </button>
        <button className={tabButtonClasses(2)} onClick={() => setTab(2)}>
          Warband
        </button>
        <button className={tabButtonClasses(3)} onClick={() => setTab(3)}>
          Base
        </button>
      </div>
      <div className="p-2">
        <div className={tabViewClasses(0)}>Data 0</div>
        <div className={tabViewClasses(1)}>Data 1</div>
        <div className={tabViewClasses(2)}>Data 2</div>
        <div className={tabViewClasses(3)}>Data 3</div>
      </div>
    </div>
  );
};
