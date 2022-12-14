import { Transition } from '@headlessui/react';
import React from 'react';

export default function SlideDown({ show = true, children }) {
  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-1000"
      enterFrom="opacity-0 -translate-y-24"
      enterTo="opacity-100 -translate-y-0"
      leave="transform transition ease-in-out duration-1000"
      leaveFrom="opacity-100 -translate-y-0"
      leaveTo="opacity-0 -translate-y-24"
    >
      {children}
    </Transition>
  );
}
