import './App.css';
import Head from './components/Nav'
import About from './components/About'
import Proj from './components/projects'
import Cont from './components/contact'
import Foot from './components/footer '
import img1 from './Images/John-Doe.jpg'
import img2 from './Images/proj1.jpg'
import img3 from './Images/proj2.jpg'
import img4 from './Images/proj3.jpg'
import img5 from './Images/proj4.jpg'

function App() {
  var arr = [{title : "Project 1", img : img2},
        {title : "Project 2", img : img3},
        {title : "Project 3", img : img4},
        {title : "Project 4", img : img5}];
  return (
    <div className="App">
      <Head fullName = "John Doe"></Head>
      <About fullName = "John Doe" >
      <img className="avatar" src={img1} alt="jhon-doe" />
      </About>
      <Proj arr={arr}></Proj>
      <Cont />
      <Foot year = "2020"></Foot>
    </div>
  );
}

export default App;
