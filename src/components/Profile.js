import React from 'react'
import takuya from './../img/takuya_croped.jpg'
import { IoIosCode, IoIosBook, IoMdPeople, IoMdLaptop} from 'react-icons/io'

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
      </div>
    </div>
  )
}

export default Profile