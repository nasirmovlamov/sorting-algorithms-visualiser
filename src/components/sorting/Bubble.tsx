"use client";

import { useEffect, useMemo, useState } from "react";

export const BubbleSorting = () => {
  const [elements, setElements] = useState([
    53, 12, 87, 45, 23, 67, 34, 98, 76, 41, 19, 55, 88, 29, 64, 10, 92, 37, 61,
    14, 78, 50, 27, 73, 8, 96, 17, 69, 42, 5,
  ]);
  const [isStartSort, setIsStartSort] = useState(false);

  const bubbleSort: any = async () => {
    // reset all elements colors
    for (let i = 0; i < elements.length; i++) {
      let element: any = document.getElementById(i.toString());
      element.style.backgroundColor = "red";
    }
    for (let i = 0; i < elements.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setElements([...elements]);
      if (elements[i] > elements[i + 1]) {
        // get elements with id update color to green
        let element: any = document.getElementById(i.toString());
        element.style.backgroundColor = "green";

        let temp = elements[i + 1];
        let element2: any = document.getElementById((i + 1).toString());
        element2.style.backgroundColor = "green";

        elements[i + 1] = elements[i];
        elements[i] = temp;
        // reset colors
        await new Promise((resolve) => setTimeout(resolve, 50));
        bubbleSort();
      }
    }
    setElements([...elements]);
    return elements;
  };

  useEffect(() => {
    if (isStartSort) {
      bubbleSort();
    }
  }, [isStartSort]);

  return (
    <>
      <button
        onClick={() => {
          setIsStartSort(true);
        }}
      >
        start bubble sort
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {elements?.map((element, index) => {
          return (
            <div
              id={index.toString()}
              key={index}
              style={{
                width: `${element * 10}px`,
                height: "5px",
                backgroundColor: "red",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};
