import { useState, useRef } from 'react';
import SlideLeft from '../SlideLeft';
import useTriggerOnScroll from '../../hooks/useTriggerOnScroll';
import React from 'react';

export default function ScrollSlideLeft({ children }) {
  const el = useRef();
  const [show, setShow] = useState(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>
      <SlideLeft show={show}>{children}</SlideLeft>
    </div>
  );
}
