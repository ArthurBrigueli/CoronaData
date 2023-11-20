import { useEffect, useState } from 'react'
import styles from './PopList.module.css'


const PopList = ({data, close})=>{

    const handleClose = ()=>{
        close()
        
    }


    return(
        <div className={styles.container}>
            <div className={styles.container_button}>
                <button onClick={handleClose}>X</button>
            </div>
            <div className={styles.container_info}>
                <h2>{data.uf}</h2>
                <p>Casos: {data.cases}</p>
                <p>Mortes: {data.deaths}</p>
                <p>Suspeitos: {data.suspects}</p>
                <p>Curados: {data.refuses}</p>
            </div>
        </div>
    )
}


export default PopList