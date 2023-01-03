import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sideMenu">
        <div className='sideMenuButton'>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='inputHolder'>
          <textarea rows = "1" className='textArea' placeholder='Type your message here.'>
          </textarea>
        </div>
      </section>
     
    </div>
  );
}

export default App;
