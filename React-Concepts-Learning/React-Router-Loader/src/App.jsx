import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import PostListProvider from './store/CreatePostContext';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='main-body'>
      <PostListProvider>
        <Header />
        <Sidebar />
        <div className='toggle-body'>
          <Outlet />
        </div>
        <Footer />
      </PostListProvider>
    </div>
  );
}

export default App;

// Outlet is used for changing part of the element means If we navigate to the other page then only the outer part is changed rest of that component stays intact or sticked.