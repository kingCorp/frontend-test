import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../hooks/useTriggerOnScroll';
import React from 'react';
import SlideUp from '../SlideUp';

export default function ScrollSlideUp({ children }) {
  const el = useRef();
  const [show, setShow] = useState(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>
      <SlideUp show={show}>{children}</SlideUp>
    </div>
  );
}
