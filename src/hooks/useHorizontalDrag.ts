import React, { useRef, useState } from "react";

const UseHorizontalDrag = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current) {
      setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrag && scrollRef.current) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return { scrollRef, onDragStart, onDragEnd, onDragMove };
};

export default UseHorizontalDrag;
