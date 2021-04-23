import { useState, useEffect } from "react";

export default (ref, rootMargin = "-200px", once = true) => {
  // State and setter for storing whether element is visible

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIntersecting(entry.isIntersecting);
          if (once) observer.disconnect();
        }
      },

      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};
