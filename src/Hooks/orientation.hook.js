import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const useOrientation = (initOrientation, initWidth, initHeight) => {
  const [orientation, setOrientation] = useState(initOrientation);
  const [dimension, seDimensions] = useState({
    width: initWidth,
    height: initHeight,
  });

  useEffect(() => {
    Dimensions.addEventListener('change', e => {
      const screen = e.screen;
      if (screen.width > screen.height) {
        setOrientation('LANDSACPE');
        seDimensions({ width: screen.width, height: screen.height });
      }
      if (screen.width < screen.height) {
        setOrientation('PORTRAIT');
        seDimensions({ width: screen.width, height: screen.height });
      }
    });
    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);
  return [dimension.width, dimension.height, orientation];
};
