import React from "react";

export default function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      Nav
    </button>
  );
}
