import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetch(url)
                .then(response => response.json())
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
        fetchData()
    }, []);

    return { data, fetchData, error, loading }
}

export default useFetch;
