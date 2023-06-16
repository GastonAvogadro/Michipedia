import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '@/redux/slices/searchSlice';
import searchImg from '@/assets/search.svg';

const Search = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        word !== '' && dispatch(changeValue(word));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            <input
                type="text"
                placeholder="Buscar raza"
                className="border border-black rounded-lg py-1 px-2 w-[250px]"
                onChange={(e) => setWord(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="border border-black" onClick={handleSearch}>
                <img src={searchImg} className="w-[30px]" />
            </button>
        </div>
    );
};

export default Search;
