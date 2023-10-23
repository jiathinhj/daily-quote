import { useEffect, useState } from 'react'
import useRandomBg from './useRandomBg';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { fetchBg } = useRandomBg()

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
            await fetchBg(); //fetch a background along with fetching a quote
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return { data, fetchData, error, loading }
}

export default useFetch;
