"use client";

import { useEffect, useState } from "react";

export const InsertionSorting = () => {
  const [elements, setElements] = useState([
    53, 72, 87, 45, 23, 67, 34, 98, 76, 41, 19, 55, 88, 29, 64, 10, 92, 37, 61,
    14, 78, 50, 27, 73, 8, 96, 17, 69, 42, 5,
  ]);
  const [isStartSort, setIsStartSort] = useState(false);

  const insertionSort = async () => {
    let arr = [...elements];
    let n = arr.length;
    let insertArr: number[] = [arr[0]];
    for (let i = 1; i < n; i++) {
      let temp = arr[i];
      // change element color
      let element: any = document?.getElementById(i.toString());
      if (element) {
        element.style.backgroundColor = "green";
      }
      innerLoop: for (let j = i - 1; j >= 0; j--) {
        if (temp < insertArr[j]) {
          // check if element is the first element
          if (j === 0) {
            insertArr.unshift(temp);
            console.log(insertArr);
            // set elements
            await new Promise((resolve) => setTimeout(resolve, 50));
            // combine insertArr and arr
            let newArr = insertArr.concat(arr.slice(i + 1, arr.length));
            setElements(newArr);
          }
          continue;
        } else {
          insertArr.splice(j + 1, 0, temp);
          // change element color
          let element: any = document?.getElementById((j + 1).toString());
          if (element) {
            element.style.backgroundColor = "green";
          }
          // set elements
          await new Promise((resolve) => setTimeout(resolve, 50));
          // combine insertArr and arr
          let newArr = insertArr.concat(arr.slice(i + 1, arr.length));
          setElements(newArr);

          // await
          await new Promise((resolve) => setTimeout(resolve, 50));
          // reset all elements colors
          for (let k = 0; k < elements.length; k++) {
            let element: any = document.getElementById(k.toString());
            if (element) {
              element.style.backgroundColor = "red";
            }
          }
          break innerLoop;
        }
      }
    }
    return elements;
  };

  useEffect(() => {
    if (isStartSort) {
      insertionSort();
    }
  }, [isStartSort]);

  return (
    <>
      <button
        onClick={() => {
          setIsStartSort(true);
        }}
      >
        start insertion sort
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "flex-end",
        }}
      >
        {elements?.map((element, index) => {
          return (
            <div
              id={index.toString()}
              key={index}
              style={{
                height: `${element * 5}px`,
                width: "15px",
                backgroundColor: "red",
                fontSize: "10px",
                display: "flex",
                alignItems: "flex-end",
                color: "white",
                justifyContent: "center",
              }}
            >
              {element}
            </div>
          );
        })}
      </div>
    </>
  );
};
