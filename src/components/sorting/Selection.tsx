"use client";

import { useEffect, useState } from "react";

export const SelectionSorting = () => {
  const [elements, setElements] = useState([
    53, 12, 87, 45, 23, 67, 34, 98, 76, 41, 19, 55, 88, 29, 64, 10, 92, 37, 61,
    14, 78, 50, 27, 73, 8, 96, 17, 69, 42, 5,
  ]);
  const [isStartSort, setIsStartSort] = useState(false);

  const selectionSort = async () => {
    for (let i = 0; i < elements.length; i++) {
      // reset all elements colors
      for (let i = 0; i < elements.length; i++) {
        let element: any = document.getElementById(i.toString());
        element.style.backgroundColor = "red";
      }
      // update color to green
      let element: any = document.getElementById(i.toString());
      element.style.backgroundColor = "green";

      for (let j = 0; j < elements.length; j++) {
        if (elements[i] < elements[j]) {
          // update color to green
          let element: any = document.getElementById(j.toString());
          element.style.backgroundColor = "green";
          let temp = elements[j];
          elements[j] = elements[i];
          elements[i] = temp;
          // reset elements
          await new Promise((resolve) => setTimeout(resolve, 50));
          setElements([...elements]);
        }
      }
    }
    return elements;
  };

  useEffect(() => {
    if (isStartSort) {
      selectionSort();
    }
  }, [isStartSort]);

  return (
    <>
      <button
        onClick={() => {
          setIsStartSort(true);
        }}
      >
        start selection sort
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
