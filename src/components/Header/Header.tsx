import USA from '../../assets/images/USA.png';
import BR from '../../assets/images/Brazil.png';
import Spain from '../../assets/images/Spain.png';
import logo from '../../assets/images/logo.png'
import styles from './Header.module.css'
import '../../assets/fonts/style.css'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react';
import logo2 from '../../assets/images/logo2.png'

function Header({whiteVersion, colorWhite}: any) {
const [navbar, setNavbar] = useState(false);


console.log(whiteVersion)


const changeBackground = () => {
  if(window.scrollY >= 80) {
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}

window.addEventListener('scroll',changeBackground)

  return (
    <>
    <header id='header' className={`${styles.header} ${navbar && styles.header_active}`}>
      <nav className={`${styles.container} ${styles.alinhar}`}>
          <a className={`${styles.logo}`} href="#"><img src={whiteVersion ? logo : logo2} alt="" className='img-fluid' /></a>
            <div className={`${styles.menu}`}>
                <ul className={`${styles.grid}`}>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar || 'text-white' } ${navbar ? 'text-dark' : ''}`}>Home</a></li>
                  <li><a href="/produtos" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`} >Produtos</a></li>
                  <li><a href="#" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}>Serviços</a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}>Customizações</a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}>Parceria</a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}>A Patense</a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}>Blog</a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}><img src={USA} alt="Bandeira Estados Unidos" /></a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}><img src={BR} alt="Bandeira Estados Unidos" /></a></li>
                  <li><a href="/" className={`${styles.title} ${colorWhite ? 'text-dark' : navbar ||'text-white' } ${navbar ? 'text-dark' : ''}`}><img src={Spain} alt="Bandeira Estados Unidos" /></a></li>
                </ul>
            </div>
            <div className={`${styles.toggle} ${styles.icon_menu}`}>
              <List size={32} />
            </div>
            <div className={`${styles.toggle} ${styles.icon_close}`}>
              <X size={32} />
            </div>
      </nav>
    </header>

    </>

  );
}

export default Header;
