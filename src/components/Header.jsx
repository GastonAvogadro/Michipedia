import Search from '@/components/Search';
import michipedia from '@/assets/michipedia.svg';

const Header = () => {
    return (
        <header className="flex flex-col justify-center items-center p-10">
            <img src={michipedia} className="w-[300px]" />
            <p>La enciclopedia que no sabías que necesitabas</p>
            <Search />
        </header>
    );
};

export default Header;
