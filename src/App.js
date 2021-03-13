import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Meeting from './pages/Meeting';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mypage" component={MyPage} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/" component={Main} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
