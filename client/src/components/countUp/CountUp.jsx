import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import './CountUp.css';

export default function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const [ref, inView]     = useInView(0.3);

  const raw    = target.replace(/[^0-9.]/g, '');
  const num    = parseFloat(raw);
  const prefix = target.match(/^[^0-9]*/)?.[0]  || '';
  const suffix = target.match(/[^0-9.]+$/)?.[0]  || '';

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 55;
    const inc   = num / steps;
    const id    = setInterval(() => {
      current += inc;
      if (current >= num) { setCount(num); clearInterval(id); }
      else setCount(current);
    }, 28);
    return () => clearInterval(id);
  }, [inView, num]);

  const display = num < 10 ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="countup">
      {prefix}{display}{suffix}
    </span>
  );
}
