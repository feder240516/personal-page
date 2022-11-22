import { useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

function createAndAppendChild(parent, childID) {
  const child = document.createElement('div');
  child.setAttribute('id', childID);
  parent.appendChild(child);
  return child;
}

export default function Portal({ children, wrapperID = 'default-portal-wrapper-id', portalID }) {
  const [wrapperElement, setWrapperElement] = useState(); // document.getElementById(portalID);
  const [portalElement, setPortalElement] = useState(); // document.getElementById(portalID);
  const provisionalPortalID = useMemo(() => `portal-${uuidv4()}`, []);
  const definedPortalID = portalID || provisionalPortalID;

  useLayoutEffect(() => {
    let newWrapperElement = document.getElementById(wrapperID);
    if (!newWrapperElement) {
      newWrapperElement = createAndAppendChild(document.body, wrapperID);
    }
    setWrapperElement(newWrapperElement);
    let newPortalElement = document.getElementById(definedPortalID);
    if (!newPortalElement) {
      newPortalElement = createAndAppendChild(newWrapperElement, definedPortalID);
    }
    setPortalElement(newPortalElement);
    return () => {
      if (newPortalElement) newWrapperElement?.removeChild(newPortalElement);
    };
  }, [definedPortalID, wrapperID]);

  if (!wrapperElement || !portalElement) return null;
  return createPortal(children, portalElement);
}
