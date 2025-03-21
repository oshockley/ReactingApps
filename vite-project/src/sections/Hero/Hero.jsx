import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun (1).svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg'
import linkdenIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/O’NEAL SHOCKLEY RESUME - 2025.pdf';

function Hero() {
    const{ theme, toggleTheme } = useTheme();
  return (
     <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img
         className={styles.hero} 
         src={heroImg} 
         alt="Profile Picture of me"
         />
         <img className={styles.colorMode} 
         src={themeIcon} 
         alt="Color mode icon" 
         />
    </div>
    <div className={styles.info}>
        <h1
        >O'Neal 
        <br />
         Shockley
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://Linkden.com/" target="_blank">
            <img src={linkdenIcon} alt="Linkden Icon" />
            </a>
        </span>
        <p>I enjoy developing apps with React.

        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
    </div>
  </section>
  );
}

export default Hero;
