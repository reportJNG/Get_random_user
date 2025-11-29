'use client'
import styles from './About.module.css';

export default function About (){


    return(

        <div className={styles.container}>   
                <div className={styles.centertxt} >
                        <h3 onClick={()=>window.open('https://remalihamza.vercel.app/','_blank')} ><strong>@2025 Hamza dev</strong></h3>
                </div>
        </div>
    )
}