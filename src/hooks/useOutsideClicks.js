import { useEffect, useState } from "react";

function useOutsideClicks(refs) {
  const [isOutside, setIsOutSide] = useState(true);
  function handleClickOutside(event) {
    const isOutside = refs.every(
      ref => ref.current && !ref.current.contains(event.target)
    );
    setIsOutSide(isOutside);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return [isOutside];
}

export default useOutsideClicks;
