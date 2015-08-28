import React from 'react';

import App from './components/App';

if (typeof document !== 'undefined') {
  React.render(<App />, document.getElementById('app'));
}

export default App;
