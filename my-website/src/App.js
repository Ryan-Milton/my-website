import React from 'react';
import Page from './Pages/page.js';

import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      content : [],
    }
  }

  componentDidMount = async () => {
    let content = await superagent.get('https://radiant-forest-79453.herokuapp.com/content');
    this.setState({ content: content.body });
  }

  render() {
return <Page content={this.state.content} />
  }
}

export default App;
