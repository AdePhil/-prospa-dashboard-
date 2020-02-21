import { useEffect, useState } from "react";

function useOutsideClicks(ref1, ref2) {
  /**
   * Alert if clicked on outside of element
   */
  const [isOutside, setIsOutSide] = useState(true);
  function handleClickOutside(event) {
    if (
      ref1.current &&
      !ref1.current.contains(event.target) &&
      ref2.current &&
      !ref2.current.contains(event.target)
    ) {
      setIsOutSide(true);
      return;
    }
    setIsOutSide(false);
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return [isOutside];
}

export default useOutsideClicks;
