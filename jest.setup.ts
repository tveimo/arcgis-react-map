// Need this one to avoid ReferenceError: TextEncoder is not defined when testing
// components that use react-router-dom.

import { TextEncoder } from 'text-encoding';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
