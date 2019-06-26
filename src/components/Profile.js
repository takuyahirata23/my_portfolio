import React from 'react'
import takuya from './../img/takuya_croped.jpg'
import { IoIosCode, IoIosBook, IoMdPeople, IoMdLaptop} from 'react-icons/io'
import { MdContactMail } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="section-wrapper">
      <div className="profile-top">
        <div className="profile-info">
          <div className="profile-picture">
            <img src={takuya} alt="Takuya"/>
          </div>
          <h1>TAKUYA HIRATA</h1>
          <p>Web Developer</p>
          <div className="profile-links">
            <a href="mailto:takuyahirata4@gmail.com"><MdContactMail className="profile-icon" /></a>
            <a href="https://github.com/Takuya-H23" target="_blank" rel="noopener noreferrer"><FaGithub className="profile-icon center" /></a>
            <a href="https://www.linkedin.com/in/takuya-hirata-1a6562169/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="profile-icon" /></a>
          </div>
        </div>
        <div className="profile-msg">
          <p>While I was a student in college, my professor told me that "no websites are perfect, so always work to improve your projects and skills to do the best you can". I have decided to adopt this mentality and pursue this goal with passion.</p>
          <p>
            I like: playing baseball, watching hockey, listen to music, and learning new things.
          </p>
        </div>
      </div>

      <div className="profile-todo">
        <h2>As A Developer</h2>
        <div className="todo-list-wrapper">
          <div>
            <IoIosCode />
            <div>
              <h3>CODE</h3>
              <p>Write clean, understandable, and maintainable code. Good applications need to be well organized and tested.</p>
            </div>
          </div>
          <div>
            <IoMdLaptop />
            <div>
              <h3>PRACTICE</h3>
              <p>Practice what I learned, try new things to improve my skills.</p>
            </div>
          </div>
          <div>
            <IoIosBook />
            <div>
              <h3>LEARN</h3>
              <p>Stay up-to-date to work build great applications. Never stop learning!</p>
            </div>
          </div>
          <div>
            <IoMdPeople />
            <div>
              <h3>COMMUNICATE</h3>
              <p>Communicate with team and clients. Talk to other developers by attending meetups. It's helpful and fun!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile