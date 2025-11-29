"use client";

import { useContext } from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "./ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme, setTheme } = themeContext;

  return (
    <div className={styles.container}>
      
      <div className={styles.leftscreen}>
        {/* logo */}
        <Image alt="logo" width={60} height={60} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&s'} className={styles.logo}/>
      </div>

      
      

      {/* RIGHT BUTTONS */}
      
      
      <div className={styles.rightscreen}>
      <button className={styles.prof} onClick={()=>window.open('https://remalihamza.vercel.app/','_blank')}>
      <i className="fi fi-br-user"></i>
      </button>
      <button className={styles.git}  onClick={()=>window.open('https://github.com/reportJNG','_blank')}>  
      <i className="fi fi-brands-github"></i>
      </button>
       <button className={styles.insta} onClick={()=>window.open('https://www.instagram.com/re_hamza_0/','_blank')}>  
      <i className="fi fi-brands-instagram"></i>
      </button>

      <button
          className={theme === "light" ? "lightbtn" : "darkbtn"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </div>
  );
}
