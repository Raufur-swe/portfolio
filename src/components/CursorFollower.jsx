import { useEffect, useRef, useState } from "react";
import { useCursor } from "../context/CursorContext";

const CursorFollower = () => {
  const { enabled } = useCursor();

  const dotRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const current = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (enabled) setVisible(true);
    };

    const leave = () => setVisible(false);

    const enter = () => {
      if (enabled) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    window.addEventListener("mouseover", enter);

    let raf;

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.18;
      current.current.y += (mouse.current.y - current.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.current.x}px,${current.current.y}px,0) translate(-50%,-50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mouseover", enter);
    };
  }, [enabled]);

  return (
    <div
      ref={dotRef}
      className="fixed left-0 top-0 w-3 h-3 rounded-full bg-black pointer-events-none z-[999999] will-change-transform transition-opacity duration-200"
      style={{
        opacity: enabled && visible ? 1 : 0,
      }}
    />
  );
};

export default CursorFollower;