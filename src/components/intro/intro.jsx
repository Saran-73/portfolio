import "./intro.css"
import me from "../../image/my-img.png"

const Intro = () => {
    return (
        <div className="i">
               <div className="i-left">
                   <ul className="i-navlist">
                      <a href="#project-title"><li>Projects</li></a>
                      <a  href="#contact"><li>Contact</li></a>
                   </ul>
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hi, My name is</h2>
                        <h1 className="i-name">Saran</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                            </div>
                        </div>
                        <div className="i-desc">
                         I build dynamic, responsive Web applications using modern workflows.
                        </div>
                    </div>
               </div>
               <div className="i-right">
                   <div className="i-bg"></div>
                <img src={me} alt="me" className="i-img" />
               </div>
        </div>
      );
}
 
export default Intro;