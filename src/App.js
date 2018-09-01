import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import ManageAccounts from './containers/ManageAccounts/ManageAccounts';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ManageAccounts />
        </Layout>
      </div>
    );
  }
}

export default App;
