import axios from 'axios'
import { useEffect, useState } from 'react'

function useDataFetch(url, option) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(url, option);
                setData(response)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url, option])
    return { data, error, loading }
}

export default useDataFetch
