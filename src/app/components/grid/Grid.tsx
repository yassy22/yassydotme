"use client";

import grid from "../../config/tailwind/grid";
import { useState, useEffect } from "react";

const Grid = () => {
  const [columns, setColumns] = useState(grid.mobile.columns);
  const [gutter, setGutter] = useState(grid.mobile.gutter);
  const [margin, setMargin] = useState(grid.mobile.margin);

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      if (width >= grid.desktop.mockupWidth) {
        setColumns(grid.desktop.columns);
        setGutter(grid.desktop.gutter);
        setMargin(grid.desktop.margin);
      } else if (width >= grid.tablet.mockupWidth) {
        setColumns(grid.tablet.columns);
        setGutter(grid.tablet.gutter);
        setMargin(grid.tablet.margin);
      } else {
        setColumns(grid.mobile.columns);
        setGutter(grid.mobile.gutter);
        setMargin(grid.mobile.margin);
      }
    };

    // Voer de grid update meteen uit bij mount
    updateGrid();

    // Voeg de resize event listener toe
    window.addEventListener("resize", updateGrid);

    // Cleanup: verwijder de event listener
    return () => {
      window.removeEventListener("resize", updateGrid);
    };
  }, []);

  return (
    <div
      className="fixed inset-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gutter}px`,
        marginLeft: `${margin}px`,
        marginRight: `${margin}px`,
        backgroundColor: "transparent",
        zIndex: -1,
      }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className="border-x-2 border-indigo-600/[.1] bg-gray-800/[.5]"
        />
      ))}
    </div>
  );
};

export default Grid;
