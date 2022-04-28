import "./intro.css"
import me from "../../image/my-img.png"

const Intro = () => {
    return (
        <div className="i">
               <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hi, My name is</h2>
                        <h1 className="i-name">Saran</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                            </div>
                        </div>
                        <div className="i-desc">
                         As a front-end web Developer I can create dynamic, responsive Web applications using modern workflows.
                        </div>
                       
                        </div>
               </div>
               <div className="i-right">
                   {/* <div className="i-bg"></div> */}
                <img src={me} alt="my image" className="i-img" />
               </div>
        </div>
      );
}
 
export default Intro;