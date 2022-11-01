import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Profile-section">
        <img src="stage-one/public/profile.jpeg" className="profile_img" alt="" />
        <h3 className="twitter"> Seun Alo </h3>
        {/*<h4 className="slack"> Oluwaseun Alo </h4>*/}
       
      </header>
      <section className="Links">
      <a
          className="Twitter-link"
          href="https://www.twitter.com/aloseun"
          target="_blank"
          rel="noopener noreferrer">
          Twitter Link
        </a>
        <br></br>
        <a className="btn_zuri" href="https://training.zuri.team/"
          target="_blank" rel="noopener noreferrer" > Zuri Team </a>
          <br></br>
        <a className="books" href="https://books.zuri.team/"
          target="_blank" rel="noopener noreferrer" title="Find books on design and coding here"> Zuri Books 
           </a>
          <br></br>
        <a className="book_python" href="https://books.zuri.team/python-for-beginners?ref_id=OluwaseunAlo"
          target="_blank" rel="noopener noreferrer" title="Want to learn Python at a finger snap? Buy here"> Python Books </a>
          <br></br>
        <a className="pitch" href="https://background.zuri.team/"
          target="_blank" rel="noopener noreferrer" title="Best background check services"> Background Check for Coders </a>
          <br></br>
        <a className="book_design" href="https://books.zuri.team/design-rules"
          target="_blank" rel="noopener noreferrer" title="Get your design book. It's free!"> Design Books </a>
          </section>
          <section className="Social">
          <img src="slack.png" href="https://www.slack.com/OluwaseunAlo" className="slack_icon"/>
          <img src="git.png" href="https://www.github.com/shayalo" className="git_icon"/>
          

          </section>
          <footer className="footer">
            <img src="zuri.png" className="zuri" />
            <img src="I4G.png" className="I4G"/>
            <p className="footnote"> HNG Intership 9 Frontend Task </p>
          </footer>
    </div>
  );
}

export default App;
