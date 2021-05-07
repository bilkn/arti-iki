import { useCallback, useEffect, useState } from 'react';

function useSlideLogic() {
  const [translateXValue, setTranslateXValue] = useState(0);

  const handleSliderButton = (translateX) => {
    setTranslateXValue(translateX);
  };

  const moveSlide = useCallback(() => {
    if (translateXValue < 300) setTranslateXValue((oldValue) => oldValue + 100);
    else setTranslateXValue(0);
  }, [translateXValue]);

  useEffect(() => {
    const interval = setInterval(moveSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [moveSlide]);

  return { handleSliderButton, translateXValue };
}

export default useSlideLogic;
