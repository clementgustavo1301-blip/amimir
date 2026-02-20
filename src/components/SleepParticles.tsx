"use client";

import { useEffect, useRef } from 'react';

const SleepParticles = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const container = document.getElementById('sleep-particles-container');
    if (!container) return;
    
    container.innerHTML = '';

    const PARTICLE_COUNT = 25;
    const types = [
      { icon: '🌙', class: 'particle-moon' },
      { icon: '✨', class: 'particle-star' },
      { icon: '☁️', class: 'particle-cloud' },
      { icon: 'zZZ', class: 'particle-zzz' },
      { icon: '⭐', class: 'particle-star' }
    ];
    const animations = ['drift-1', 'drift-2', 'drift-3'];
    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('span');
      const type = types[Math.floor(random(0, types.length))];
      
      particle.innerHTML = type.icon;
      particle.classList.add('sleep-particle', type.class);

      particle.style.setProperty('--start-x', `${random(0, 100)}vw`);
      particle.style.setProperty('--start-y', `${random(-10, 90)}vh`);
      particle.style.setProperty('--size', `${random(1, 2.5)}rem`);
      particle.style.setProperty('--opacity', `${random(0.1, 0.5)}`);
      particle.style.setProperty('--duration', `${random(20, 40)}s`);
      particle.style.setProperty('--delay', `-${random(0, 40)}s`);
      
      const randomAnimation = animations[Math.floor(random(0, animations.length))];
      particle.style.setProperty('--animation-name', randomAnimation);

      container.appendChild(particle);
    }
  }, []);

  return <div id="sleep-particles-container"></div>;
};

export default SleepParticles;
