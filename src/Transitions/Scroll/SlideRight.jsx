import { useState, useRef } from 'react';
import SlideRight from '../SlideRight';
import React from 'react';
import useTriggerOnScroll from '../../hooks/useTriggerOnScroll';

export default function ScrollSlideRight({ children }) {
  const el = useRef();
  const [show, setShow] = useState(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div ref={el}>
      <SlideRight show={show}>{children}</SlideRight>
    </div>
  );
}
