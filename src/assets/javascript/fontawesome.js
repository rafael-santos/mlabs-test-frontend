import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Solid
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

library.add(
  faCog,
  faChevronDown,
  faBars,
  faTimes
);

// Regular
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons/faQuestionCircle';
library.add(faQuestionCircle);

// Brands
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
library.add(faWhatsapp);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
