import { useEffect, useState } from "react"
import axios from 'axios'

const useDataCorona = (search)=>{

    const [dataCorona, setDataCorona] = useState([])


    useEffect(()=>{
        const fetchData = async()=>{
            

            let api = 'https://covid19-brazil-api.now.sh/api/report/v1'
            
            if(search){
                api = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${search}`
            }
            
            let dat = await axios.get(api)
            setDataCorona(search? [dat.data] : dat.data.data)
        }
        fetchData()
    }, [search])
    return dataCorona
}


export default useDataCorona