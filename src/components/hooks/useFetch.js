import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            await fetch(url)
                .then(response => response.status === 200 && response.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return { data, fetchData, error, loading }
}

export default useFetch;
