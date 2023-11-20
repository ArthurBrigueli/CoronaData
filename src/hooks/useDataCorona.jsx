import { useEffect, useState } from "react"
import axios from 'axios'

const useDataCorona = ()=>{

    const [dataCorona, setDataCorona] = useState([]) 

    useEffect(()=>{
        const fetchData = async()=>{
            const dat = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
            setDataCorona(dat.data.data)
        }

        fetchData()
    }, [])
    return dataCorona
}


export default useDataCorona