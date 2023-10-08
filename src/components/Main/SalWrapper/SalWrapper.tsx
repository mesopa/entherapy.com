import React, { useEffect, FC } from 'react';

import sal from 'sal.js';

import 'sal.js/dist/sal.css';

interface IOptions {
  root: Element | null;
  rootMargin?: string;
  threshold?: number;
  animateClassName?: string;
  disabledClassName?: string;
  enterEventName?: string;
  exitEventName?: string;
  selector?: string;
  once?: boolean;
  disabled?: boolean;
}

interface ISalWrapper {
  children: React.ReactNode;
  options?: IOptions;
}

const SalWrapper: FC<ISalWrapper> = ({
  children,
  options = {
    root: null,
    rootMargin: '0% 50%',
    threshold: 0.5,
    animateClassName: 'sal-animate',
    disabledClassName: 'sal-disabled',
    enterEventName: 'sal:in',
    exitEventName: 'sal:out',
    selector: '[data-sal]',
    once: true,
    disabled: false,
  },
}) => {
  useEffect(() => {
    sal(options);
  }, [options]);

  return <>{children}</>;
};

export default SalWrapper;
