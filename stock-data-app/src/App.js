import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        Stock Data App
        <Welcome name="Roy"/>
      </div>
    )
  }
}

export default App;
