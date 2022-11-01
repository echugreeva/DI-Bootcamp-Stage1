import './App.css';
import {connect} from 'react-redux'
import Navbar from '../components/Navbar';
import { Routes, Route, useParams } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact'
import Post from '../components/Post';


function App(props) {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<ErrorBoundary><Home posts={props.posts}/></ErrorBoundary>} />
      <Route exact path="/about" element={<ErrorBoundary><About posts={props.posts}/></ErrorBoundary>} />
      <Route exact path="/contact" element={<ErrorBoundary><Contact posts={props.posts}/></ErrorBoundary>} />
      <Route exact path="/post/:id" element={<Post/>} />
     </Routes>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts,
  }
}

export default connect(mapStateToProps)(App)

