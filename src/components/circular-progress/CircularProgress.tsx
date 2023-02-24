import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import 'react-circular-progressbar/dist/styles.css';

import GradientSVGPath from '@/components/circular-progress/GradientSVGPath';
import GradientSVGTrail from '@/components/circular-progress/GradientSVGTrail';

type Props = {
  duration?: number;
  value?: number;
  intervalDuration?: number;
};

// Adds the possibility to auto increase percentage on desired total duration
const CircularProgress = ({
  duration,
  value = 0,
  intervalDuration = 300,
}: Props) => {
  const [percentage, setPercentage] = useState(value);

  let interval: NodeJS.Timer | undefined = undefined;

  // Since the percentage state is not updated immediately, we need to use a ref to keep track of the current percentage
  const refPercentage = useRef(0);

  useEffect(() => {
    if (duration && refPercentage.current < 100 && interval === undefined) {
      const intervals = duration / intervalDuration;
      const increment = (100 - value) / intervals;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        if (refPercentage.current >= 100) {
          clearInterval(interval);
          return;
        }
        setPercentage((prevPercentage) => prevPercentage + increment);
        refPercentage.current += increment;
      }, intervalDuration);
    }
  }, []);

  const idCSSPath = 'path';
  const idCSSTrail = 'trail';

  return (
    <>
      <GradientSVGPath />
      <GradientSVGTrail />
      <CircularProgressbar
        value={percentage}
        styles={{
          path: {
            stroke: `url(#${idCSSPath})`,
            height: '100%',
          },
          trail: {
            stroke: `url(#${idCSSTrail})`,
          },
        }}
      />
    </>
  );
};

export default CircularProgress;
