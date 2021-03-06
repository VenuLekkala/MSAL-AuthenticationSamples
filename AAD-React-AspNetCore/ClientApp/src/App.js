import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GraphData } from './components/GraphData';
import { Energy } from './components/Energy';
import './custom.css'
import { withAuth } from './msal/MsalAuthProvider';

class RootApp extends Component {
    render() {
        return (
            <Layout {...this.props} >
                <Route exact path='/' component={Home} />
                <Route exact path='/graph-data' component={GraphData} />
                <Route exact path='/Energy' component={Energy} />
            </Layout>
        );
    }
}
export const App = withAuth(RootApp);
