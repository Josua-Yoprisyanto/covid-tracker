import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
        <span>Copyright &copy; 2022 Josua-Yoprisyanto. All Rights Reserved</span>
      </div>
      <div className='social-container'>
        <a target="_blank" href="https://www.facebook.com/josua.jojo.12/">
          <img src="https://img.icons8.com/color/40/000000/facebook-new.png" />
        </a>
        <a target="_blank" href="https://www.instagram.com/josua_yoprisyanto/">
          <img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png" />
        </a>
        <a target="_blank" href="https://github.com/Josua-Yoprisyanto">
        <img src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer