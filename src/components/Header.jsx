import { useDispatch } from 'react-redux';
import { changeValue } from '../redux/slices/searchSlice';

const Header = () => {
    const dispatch = useDispatch();
    
    const handleSearch = (search) => {
        dispatch(changeValue(search))
    };

    return (
        <header>
            <h1>Michipedia</h1>
            <p>La enciclopedia que no sabías que necesitabas</p>
            <button className="p-4 border border-black" onClick={()=> handleSearch('american')}>Buscar</button>
        </header>
    );
};

export default Header;
