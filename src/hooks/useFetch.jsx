import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setError(false)
        const config = {
            headers: { 'X-Api-Key': '9OTnoh5CopkfNWyQTV/6oA==yoCMkcIzlhqsUGNP' },
        };
        axios
            .get(url, config)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
