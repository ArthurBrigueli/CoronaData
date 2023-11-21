import styles from './InputSearch.module.css'



const InputSearch = ({onChange})=>{

    return(
        <>
            <input className={styles.InputSearch} type="search" name="" id="" placeholder="Pesquise por UF" onChange={(e)=>onChange(e.target.value)}/>
        </>
    )
}


export default InputSearch