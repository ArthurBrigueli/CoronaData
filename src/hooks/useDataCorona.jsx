import { useEffect, useState } from "react"
import axios from 'axios'

const useDataCorona = (search)=>{

    const [dataCorona, setDataCorona] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{

            try{
                let api = 'https://covid19-brazil-api.now.sh/api/report/v1'
            
                if(search){
                    api = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${search}`
                }
                
                setLoading(true)
                await axios.get(api).then(response => {
                    if(response.data && response.data.error){
                        return
                    }
                    setDataCorona(search? [response.data] : response.data.data)
                })
                
                setLoading(false)
            }catch(error){
                console.log(error)
            }
            
        }
        fetchData()
    }, [search])
    return [dataCorona, loading]
}


export default useDataCorona