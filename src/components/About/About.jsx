import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Innovative and detail-oriented UI/UX Engineer and Front-End Developer with over 16 years of experience designing and implementing intuitive user interfaces and electronic forms.</p>
                    <p>Adept at problem-solving, automation, and enhancing user experiences across web-based applications.</p>
                    <p>Passionate about crafting refined digital experiences for global audiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML, CSS</p>
                        <hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"60%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>16+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />            
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About