// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My Skills in Devoplement, DataAnalyst and DSA.
                <br></br> 
              </p>
              <div className="high"></div>

              <div className="highcat">
                <h1>Web-Devolpment</h1>
              </div>
              <div className="cate">
                <div className="Lang">
                  <h2>HTML</h2>
                  <p1>Advanced</p1>
                </div>
                <div className="Lang">
                  <h2>CSS</h2>
                  <p1>Intermediate</p1>
                </div>

                <div className="Lang">
                  <h2>JavaScript</h2>
                  <p1>Intermediate</p1>
                </div>
                <div className="Lang">
                  <h2>ReactJS</h2>
                  <p1>Intermediate</p1>
                </div>
              </div>

              <div className="highcat">
                <h1>Others</h1>
                <div className='cate'>
                          
                          <div className='Lang'><h2>DSA-C++</h2> 
                          <p1>Intermediate</p1></div>
                          <div className='Lang'><h2>Python</h2> 
                          <p1>Intermediate</p1></div>
                                              
                          <div className='Lang'><h2>NodeJS</h2> 
                          <p1>Beginner</p1></div>
                          <div className='Lang'><h2>SQL</h2> 
                          <p1>Beginner</p1></div>
                          </div>
              </div>

              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C++</h5>
                                </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            
                        </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
