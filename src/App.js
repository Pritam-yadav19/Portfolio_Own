import React from "react";
import myImage from './pic.jpeg';
import htmls from './logos/html.png';
import csss from './logos/css.png';
import jss from './logos/js.png';
import reacts from './logos/react.png';
import gits from './logos/github.png';
import links from './logos/linked.png';
import ecarts from './logos/ecart.png'

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:"100%",
  height:"100vh"
}
function App() {

  return (
    <div>   
      <style jsx>{`
        @keyframes radiusTransition {
          0% {
            border-radius: 30% 50% 10% 50% / 50% 10% 50% 30%;
          }

          100% {
            border-radius: 23% 56% 66% 22% / 29% 41% 35% 52%;
          }
        }
        .container {
            border:2px;
            display:grid;
            gridTemplateColumns:2fr 1fr;
            gridTemplateRows:1fr 1fr 1fr;
            width:45%;
            height:50%;
        }
        .container_about{
            display:grid;            
            gridTemplateRows:1fr 1fr 1fr;
            width:45%;
            height:30%;
            
        }
        @media only screen and (max-width:600px){
          .container{
            width:100%
          }
        }
        .images {
            width:100%;
            height:90%;
            borderRadius:50% 37% 18% 72% / 41% 21% 64% 36%;
            animation:radiusTransition 4s infinite alternate;
            border:3px solid black;
        }
        .logos {
          width:40px;
          height:40px;
          
        }
        .logoss {
          width:60px;
          height:40px;
          
        }
        .action-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 15px;
          margin: 5px;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .action-button:hover {
          background-color: #0056b3;
        }
      `}</style>
      <header style={{position:"fixed", zIndex:"100", width:"100%"}}>
        <div style={{
          display:"flex",
          justifyContent:"space-between"
        }}>
          <div style={{fontWeight:"bold", marginLeft:"1%", fontSize:"2em", marginTop:"1%"}}>Pritam.dev</div>
          <div style={{
            marginRight:"1%", marginTop:"1%"
          }}>
            <button style={{border:"0px", background:"white", fontWeight:"bold", fontSize:"1em"}}>Home</button>
            <button style={{border:"0px", background:"white", fontWeight:"bold", fontSize:"1em"}}>About</button>
            <button style={{border:"0px", background:"white", fontWeight:"bold", fontSize:"1em"}}>Projects</button>            
          </div>
        </div>
        {/* <ul style={{
          display:"flex",
          alignItems:"center",
          gap:"10%",
          marginRight:"0%"
        }}>
          <li style={{marginRight:"30%"}}>
            Pritam.dev
          </li>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}

      </header>
            <div style={{...center}}>
              <div className="container"
              >
                <div>
                  <h1 style={{
                    fontWeight:"bold",
                    fontSize:"2.8em"
                  }}>Front-End React Developer</h1>
                </div>
                <div style={{
                  gridArea:"1/2/3/3"
                  
                }}>
                  <img className="images"
                    src={myImage}
                    alt="mypic"
                    ></img>
                </div>
                <div>
                  <p style={{
                    color:"#9A9A9A",
                    width:"90%"
                  }}>Hi, I'm Pritam Yadav. A passionate Front-End React Developer.</p>
                  <br />
                  <div>
                    <a href="https://github.com/Pritam-yadav19?tab=repositories" target="_blank" rel="noopener noreferrer" style={{marginRight:"15px"}}><img className="logos" src={gits} alt="github"></img></a>
                    <a href="https://www.linkedin.com/in/pritam-yadav-0743021a0/" target="_blank" rel="noopener noreferrer"><img className="logos" src={links} alt="linkedin"></img></a>
                  </div>                      {/*rel="noopener noreferrer" is for security reasons */}
                </div>
                <div style={{
                  gridArea:"3/1/4/3",
                  marginTop:"1em"                  
                }}>
                    <p style={{
                      fontWeight:"bold",
                      display:"flex"
                    }}>Skills<span style={{marginLeft:"2em",marginRight:"2em"}}>|</span>
                      <div style={{
                        
                      }}>
                        <img className="logos" style={{marginRight:"40px"}} src={htmls} alt="html"></img>
                        <img className="logos" style={{marginRight:"40px"}} src={csss} alt="css"></img>
                        <img style={{marginRight:"40px"}} className="logoss" src={jss} alt="js"></img>
                        <img style={{marginRight:"40px"}} className="logoss" src={reacts} alt="react"></img>
                      </div>
                    </p>
                </div>
              </div>
            </div>
            <div style={{...center}}>
              <div style={{...center,
                background:"#498AA9",
                height:"60%"
              }}>
                <div className="container_about" style={{
                  background:"white",
                  padding:"10px",
                  height:"70%",
                  border:"10px solid #F57B7D"
                }}>
                  <div>
                    <p style={{
                      fontSize:"1.5em",
                      fontWeight:"bold",
                      color:"blue",
                      margin:"0px"
                    }}>ABOUT ME</p>
                  </div>
                  <div>
                    <p style={{
                      fontSize:"1.5em",
                      fontWeight:"bold",
                      margin:"0px"
                    }}>A dedicated Front-End React Developer.</p>
                  </div>
                  <div>
                    <p style={{
                      color:"#9A9A9A",
                      margin:"0px"
                    }}>Hello, I'm Pritam Yadav, a junior React Frontend Developer dedicated to crafting responsive and visually appealing user interfaces. Proficient in creating seamless experiences, I specialize in clean, maintainable code while staying up-to-date with the latest technologies. With a keen eye for design and a problem-solving mindset, I thrive in collaborative environments. Eager to contribute my skills and passion to innovative projects, I'm excited about the opportunity to create impactful web applications. Let's connect and explore the possibilities!
                    </p>
                  </div>
                </div>  
              </div> 
            </div>
            <div style={{...center}}>
              <div>
                {/* <p style={{
                    fontSize:"2em",
                    fontWeight:"bold",
                    color:"black",
                    margin:"0px"
                  }}>PROJECTS</p> */}
                                  <div style={{ fontFamily: 'Arial, sans-serif' }}>
                        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
                          <h1>Web Development Showcase</h1>
                        </header>
                        <section style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                          <div style={{ width: '300px', margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center' }}>
                            <img src={ecarts} alt="Project 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
                            <h2>ECART</h2>
                            <p><h4>React/Redux</h4>Description of Project 1.</p>
                            <div>
                              <button className="action-button" onClick={() => window.open('https://github.com/Pritam-yadav19/Cart-React', '_blank')}>View Code</button>
                              <button className="action-button" onClick={() => window.open('https://pritam-yadav19.github.io/Cart-React/', '_blank')}>View Live</button>
                            </div>
                          </div>
                          
                          
                        </section>
                        
                      </div>
              </div>
            </div>
            
    </div>
  );
}





export default App;
