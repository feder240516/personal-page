import { useEffect, useState } from 'react';

export default function usePopupAnimation({ isOpen, animationTime }) {
  const [mounted, setMounted] = useState(false);
  const [allowInteraction, setAllowInteraction] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setAllowInteraction(false);
      setTimeout(() => setAllowInteraction(true), animationTime);
    } else {
      setAllowInteraction(false);
      setTimeout(() => setMounted(false), animationTime);
    }
  }, [animationTime, isOpen]);

  const shouldRenderPopup = isOpen || mounted;
  const showFullSizePopup = isOpen && mounted;
  return {
    shouldRenderPopup,
    showFullSizePopup,
    allowInteraction,
  };
}
