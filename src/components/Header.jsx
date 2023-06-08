import michiHeader from '../assets/michiHeader.svg';
import useFetch from '../hooks/useFetch';

const Header = () => {
    //const { data, error, loading } = useFetch('https://api.api-ninjas.com/v1/cats?min_weight=1');
    //console.log(data);

    return (
        <section>
            <h1>Michipedia</h1>
            <p>La enciclopedia que no sabías que necesitabas</p>
            <button className='p-4 border border-black'>Buscar</button>
            <img src={michiHeader} className="w-[200px]" />
        </section>
    );
};

export default Header;
