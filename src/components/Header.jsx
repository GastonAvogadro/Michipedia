import Search from '@/components/Search';
import michipedia from '@/assets/michipedia.svg';

const Header = () => {
    return (
        <header className="flex flex-col justify-center items-center p-10">
            <img src={michipedia} onClick={() => (window.location.href = '/')} className="w-[300px] cursor-pointer" />
            <p>La enciclopedia que no sabías que necesitabas</p>
            <Search />
        </header>
    );
};

export default Header;
