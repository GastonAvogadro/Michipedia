import { motion } from 'framer-motion';
import Search from '@/components/Search';
import michipedia from '@/assets/michipedia.svg';

const Header = () => {
    return (
        <motion.header
            className="flex flex-col justify-center items-center py-10"
            initial={{ y: -180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", stiffness: 100, duration: 0.5 }}
        >
            <img
                src={michipedia}
                onClick={() => (window.location.href = '/')}
                className="w-[300px] cursor-pointer"
            />
            <p className='mt-2 text-[0.9rem] sm:text-[1rem]'>La enciclopedia que no sabías que necesitabas</p>
            <Search />
        </motion.header>
    );
};

export default Header;
