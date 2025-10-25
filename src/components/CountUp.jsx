import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = '',
  suffix = ''
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(from);

  // Intersection Observer to trigger animation when element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation effect
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay * 1000;
    const endTime = startTime + duration * 1000;
    const startValue = from;
    const endValue = to;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart);
      
      setCurrentValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, from, to, duration, delay]);

  return (
    <span className={className} ref={ref}>
      <span className={className && className.includes('success-font') ? '' : 'success-font'}>
        {currentValue.toLocaleString()}
      </span>
      {suffix}
    </span>
  );
}

