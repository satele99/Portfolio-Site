import './App.css';
import AboutMe from './components/AboutMe';
import Listedprojects from './components/ListedProjects';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HTML from './images/html-2-logo.png'
import CSS from './images/css-2-logo.png'
import JavaS from './images/js-2-logo.png'
import ReactLogo from './images/react5logo.png'
import ReduxLogo from './images/redux-2-logo.png'
import SequelizeLogo from './images/sequelize-logo-png-transparent2.png'
import SocketLogo from './images/58482deccef1014c0b5e4a64.png'
import NodeLogo from './images/nodejs-2-logo.png'
import sqlLogo from './images/sql-server-icon-png-29.png'
import ExpressLogo from './images/Expressjs.png'

function App() {
  const projects = [{
    name: 'Tic-Tac-Toe',
    desc: 'A complete game of tic tac toe versus the computer! Created using Vanilla Javascript and minimal HTML and CSS.',
    gitLink: 'https://github.com/satele99/tic-tac-toe-project',
    live: 'https://satele99.github.io/tic-tac-toe-project/'
  }, 
  {
    name: 'Book Archive',
    desc: 'I put my knowledge to the test for the fist time, by creating an archive to store all the books I have or will have read.',
    gitLink: 'https://github.com/satele99/library',
    live: 'https://github.com/satele99/library'
  }, 
  {
    name: 'Budget App',
    desc: "My first react project! This app utilizes Redux for state management, and is connected to a postgres database via Sequelize!",
    gitLink: 'https://github.com/satele99/react-expense-app',
    live: 'https://github.com/satele99/react-expense-app'
  },
  {
    name: 'Social Media Clone',
    desc: 'Second Full-Stack Project! THis was a group project that utilized React, Redux, Express.js, Sequelize, and Socket.io!',
    gitLink: 'https://github.com/olyviahix/Capstone-Project', 
    live: 'https://github.com/olyviahix/Capstone-Project'
  } ]
  return (
    <div className="App">
      <Navbar/>
      <div className='midsection'>
          <AboutMe/>
      </div>
      <div className='project-container'>
        <h2 style={{fontWeight: 'bolder', marginTop: '5rem', color: '#fff'}}>My Projects</h2>
        <div className='grid-project'>
          <Container>
            <Row>
              {
                projects.map((item, index) => (
                  <Col>
                    <Listedprojects index={index} name={item.name} content={item.desc} link={item.gitLink} live={item.live}/>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </div>
      </div>
      <div className='what-i-know'>
      <Container className='add-space'>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={HTML}/>HTML</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={CSS}/>CSS</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={JavaS}/>Javascript</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={NodeLogo}/>Node.js</div></Col>
        </Row>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={ExpressLogo}/>Express.js</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={sqlLogo}/>SQL</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={ReactLogo}/>React.js</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={ReduxLogo}/>Redux</div></Col>
        </Row>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={SequelizeLogo}/>Sequelize</div></Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}><div className='image-box'><img className='image-box' src={SocketLogo}/>Socket.io</div></Col>
        </Row>
      </Container>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
