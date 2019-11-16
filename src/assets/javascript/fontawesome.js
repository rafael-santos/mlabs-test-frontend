import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Solid
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

library.add(
  faCog,
  faChevronDown,
  faBars
);

// Brands
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
library.add(faWhatsapp);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
