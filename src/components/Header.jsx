import michiHeader from '@/assets/michiHeader.svg';
import useFetch from '@/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { changeValue } from '../redux/slices/searchSlice';

const Header = () => {
    const dispatch = useDispatch();
    
    const handleSearch = (search) => {
        dispatch(changeValue(search))
        //useFetch(`https://api.api-ninjas.com/v1/cats?name=${search}`)
    };

    return (
        <header>
            <h1>Michipedia</h1>
            <p>La enciclopedia que no sabías que necesitabas</p>
            <button className="p-4 border border-black" onClick={()=> handleSearch('american')}>Buscar</button>
            <img src={michiHeader} className="w-[200px]" />
        </header>
    );
};

export default Header;
