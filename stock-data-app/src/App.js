import React from 'react';
import Welcome from './Welcome';
import Main from './Main';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "Roy Chen",
      microsoftValue: 100,
      googleValue: 200,
      amazonValue: 300,
      appleValue: 150
    }
  }


  render() {
    return (
      <div>
        <h1>Stock Data App</h1>
        <Welcome name={this.state.name} />
        <Main microsoftValue={this.state.microsoftValue}
          amazonValue={this.state.amazonValue}
          googleValue={this.state.googleValue}
          appleValue={this.state.appleValue}
        />
      </div>
    )
  }
}

export default App;
