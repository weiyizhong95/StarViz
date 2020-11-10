import React from 'react';
import starlinkLogo from './images/starlink_logo.svg';
import { Layout } from 'antd';
import Main from './components/Main';
import 卫星 from  './images/卫星.png';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img src={卫星} className="App-logo" alt="logo" />
        <p className="title">
          StarViz
        </p>
      </Header>
      <Content>
        <Main /> 
      </Content>
      <Footer>
        (c)2020 StarLink Tracker. All Rights Reserved. Website Made by Weiyi Zhong
      </Footer>
    </Layout>
  );
}

export default App;
