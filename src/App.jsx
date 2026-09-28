import "./App.css";

function Navbar(){
  return(
    <div>
      <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

function Home(){
  return(
    <div>
      <section id="home">
                <h2>Vipin Singh Rawat</h2>
                <p>Frontend Developer</p>
                <button>Hire Me</button>
                <button>Download Resume</button>
           </section>
    </div>
  );
}

function About(){
  return(
    <div>
      <section id="about">
                <h3>About</h3>
                    <p>
                        I am a B.Tech CSE student passionate about web development.
                        I have a strong foundation in HTML, CSS, Git, GitHub, and C++. 
                        I am currently learning JavaScript and progressing toward the 
                        MERN stack while strengthening my DSA skill.
                    </p>            
           </section>
    </div>
  );
}

function Skills(){
  return(
    <div>
      <section id="skills">
                <h3>Skills</h3>
                <ul>
                    <li>Languages : C++</li>
                    <li>Frontend : Html CSS</li>
                    <li>Tools : Git GitHub</li>
                </ul>
           </section>
    </div>
  );
}

function Projects(){
  return(
    <div>
      <section id="projects">
                <h3>Projects</h3>
                <ol>
                    <li>
                        <h4>Portfolio</h4>
                        <p>Tech Stack : HTML CSS</p>
                        <ul>
                            <li>Developed a responsive personal portfolio website to showcase skills, projects, and contact information.</li>
                            <li>Build a modern UI using Flexbox and CSS Grid with mobile-friendly layouts.</li>
                             <li>  Implemented smooth navigation, hover effects, and clean semantic HTML for better accessibility.</li>
                        </ul>
                    </li>
                </ol>
           </section>
    </div>
  );
}

function Contact(){
  return(
    <div>
      <section id="contact">
                <h3>Contact</h3>
                <nav>
                    <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                    <a href="tel:+911234567890">XXXXXXXXXX</a>
                    <a href="https://github.com/yourusername">Github</a>
                    <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
                </nav>
           </section>
    </div>
  );
}

function Footer(){
  return(
    <div>
      <footer>
            <p>© 2026 Vipin Singh Rawat</p>
        </footer>
    </div>
  );
}

function App(){
  return(
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;