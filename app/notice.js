'use client';

import { useEffect, useState } from 'react';

export default function Notice({ notices = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || notices.length < 2) return;
    const timer = setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((index) => (index + 1) % notices.length);
      }
    }, 7000);
    return () => clearInterval(timer);
  }, [paused, notices.length]);

  if (!notices.length) return null;

  return (
    <aside
      className="notice-bar"
      aria-label="ক্লাবের নোটিশ"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p>{notices[activeIndex % notices.length].text}</p>
    </aside>
  );
}
