import { useState } from "react";
import useDataCorona from "../../hooks/useDataCorona"
import styles from './List.module.css'
import axios from 'axios'
import PopList from "../PopList/PopList";



const List = ()=>{

    const [search, setSearch] = useState(null)
    const [dataClick, setDataClick] = useState([])
    const [close, setClose] = useState(false);
    const data = useDataCorona(search)

    const handleClick = async(key)=>{
        const a = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${key}`)
        setDataClick(a)
        setClose(true)
    }

    const handleClose = ()=>{
        setClose(false)
    }

    const handleSearch = (e)=>{
        if(e === ""){
            setSearch(null)
        }else{
            setSearch(e)
        }
        
    }
    

    return(
        <div className={styles.container}>
            {close && (
                <PopList data={dataClick.data} close={handleClose}/>
            )}
            <div className={styles.containerh2}>
                <h2>Atualização Corona Virus</h2>
                <div className={styles.container_search}>
                    <input type="search" name="" id="" placeholder="Pesquise por UF" onChange={(e)=>handleSearch(e.target.value)}/>
                </div>
            </div>
            <div className={styles.container_list}>
                {search === null ?(
                    data.map((item, index) =>(
                        <div key={index} className={styles.container_item} onClick={(e)=>handleClick(item.uf)}>
                            <div>
                                <span>{item.uf}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Casos</span>
                                <span>{item.cases}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Mortes</span>
                                <span>{item.deaths}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Suspeitos</span>
                                <span>{item.suspects}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Curados</span>
                                <span>{item.refuses}</span>
                            </div>
                        </div>
                    ))
                ):(
                    data.map((item,index)=>(
                        <div key={index} className={styles.container_item} onClick={(e)=>handleClick(item.uf)}>
                            <div>
                                <span>{item.uf}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Casos</span>
                                <span>{item.cases}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Mortes</span>
                                <span>{item.deaths}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Suspeitos</span>
                                <span>{item.suspects}</span>
                            </div>
                            <div className={styles.container_info}>
                                <span>Curados</span>
                                <span>{item.refuses}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}


export default List