import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import CreatePosts from './Components/CreatePosts';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './store/CreatePostContext';

function App() {

  const [selectedTab, setselectedtab] = useState("Home")

  return (
    <div className='main-body'>
      <PostListProvider>
        <Header />
        <Sidebar selectedTab={selectedTab} setselectedtab={setselectedtab} />
        <div className='toggle-body'>
          {selectedTab === "Home" ? <PostList /> : <CreatePosts />}
        </div>
        <Footer />
      </PostListProvider>
    </div>
  );
}

export default App;
