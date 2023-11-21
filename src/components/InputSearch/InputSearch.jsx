const InputSearch = ({onChange})=>{

    return(
        <>
            <input type="search" name="" id="" placeholder="Pesquise por UF" onChange={(e)=>onChange(e.target.value)}/>
        </>
    )
}


export default InputSearch