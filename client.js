// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';
import { Location } from 'react-360-web';

// Create a location two meters in front of the user, and one meter down

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const location = new Location([0, 1, -1]);

  r360.renderToLocation(
    r360.createRoot('VrScene'),
    location,
    r360.getDefaultLocation(),
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));  
}

window.React360 = { init };
