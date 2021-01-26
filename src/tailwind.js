import React, { useEffect, useState, createContext, useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { defaultStyle } from "./styleguide";

const TailwindUIContext = createContext();

export const screenTypes = [
  {
    name: "sm",
    breakpoint: 640,
  },
  {
    name: "md",
    breakpoint: 768,
  },
  {
    name: "lg",
    breakpoint: 1024,
  },
  {
    name: "xl",
    breakpoint: 1280,
  },
  {
    name: "2xl",
    breakpoint: 1536,
  },
];

let finalStyleSheet = {
  ...defaultStyle,
};
let styleKeys = Object.keys(defaultStyle);

screenTypes.forEach((type) => {
  styleKeys.forEach((key) => {
    finalStyleSheet[type.name + ":" + key] = defaultStyle[key];
  });
});

export const sortClassName = (className) => {
  return className.split(" ").sort((a, b) => {
    let valueA = 0;
    let valueB = 0;

    const mediaClassA = a.split(":");
    const mediaClassB = b.split(":");

    if (mediaClassA.length > 1) {
      const { breakpoint } = screenTypes.find(
        ({ name }) => name === mediaClassA[0]
      );
      valueA = breakpoint;
    }

    if (mediaClassB.length > 1) {
      const { breakpoint } = screenTypes.find(
        ({ name }) => name === mediaClassB[0]
      );
      valueB = breakpoint;
    }

    return valueA - valueB;
  });
};

export const removeUnNeededClasses = (className, { windowSize }) => {
  return className.map((c) => {
    const mediaClass = c.split(":");

    if (mediaClass.length > 1) {
      const { breakpoint } = screenTypes.find(
        ({ name }) => name === mediaClass[0]
      );
      if (breakpoint > windowSize) {
        return;
      }
    }

    return tailwind[c];
  });
};

export const TailwindUIProvider = ({ children }) => {
  let [windowSize, setWindowSize] = useState(Dimensions.get("window").width);

  useEffect(() => {
    Dimensions.addEventListener("change", handleChange);

    return () => Dimensions.removeEventListener("change", handleChange);
  }, []);

  const handleChange = (nextDimentions) => {
    setWindowSize(nextDimentions.window.width);
  };

  return (
    <TailwindUIContext.Provider value={{ windowSize }}>
      {children}
    </TailwindUIContext.Provider>
  );
};

export const tailwind = StyleSheet.create(finalStyleSheet);
export const useTailwindUI = () => useContext(TailwindUIContext);
