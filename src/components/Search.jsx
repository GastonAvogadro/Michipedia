import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '@/redux/slices/searchSlice';

const Search = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (search) => {
        dispatch(changeValue(search));
    };

    return (
        <>
            <input type="text" placeholder="Buscar" onChange={(e) => setWord(e.target.value)} />
            <button className="p-4 border border-black" onClick={() => handleSearch(word)}>
                Buscar
            </button>
        </>
    );
};

export default Search;
