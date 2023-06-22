import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';
import { AnimatePresence, motion } from 'framer-motion';
import paw_empty from '@/assets/paw-empty.png';
import paw_full from '@/assets/paw-full.png';
import closeIcon from '@/assets/close.png';

const CatModal = () => {
    const dispatch = useDispatch();
    const catData = useSelector((state) => state.catData.value);

    const handleData = () => {
        dispatch(changeValue([]));
    };

    const handlePaws = (num) => {
        let paws = [...Array(5)].map((paw, i) => {
            return <img key={i} src={i < num ? paw_full : paw_empty} className="w-[30px]" />;
        });

        return <div className="flex">{paws}</div>;
    };

    return (
        <AnimatePresence mode="wait">
            {catData.length !== 0 && (
                <motion.div
                    onClick={handleData}
                    className="h-screen w-screen fixed top-0 bg-black/70 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="min-w-[65%] min-h-[90vh] bg-white opacity-100 rounded-[14px] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 relative px-4"
                        initial={{ y: '-100vh' }}
                        animate={{ y: '0' }}
                        exit={{ y: '100vh' }}
                        transition={{ type: 'tween', stiffness: 100, duration: 0.4 }}
                    >
                        <img
                            src={closeIcon}
                            onClick={handleData}
                            className="w-[22px] absolute top-5 right-5 cursor-pointer"
                            alt="close"
                        />
                        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
                            <img
                                src={catData.image_link}
                                className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-cover rounded-[14px] border-[#ffb152] border-2"
                                alt={catData.name}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[2rem] mb-2 sm:mb-6">{catData.name}</h3>
                            <div>
                                <p className="text-[1.3rem]">Juguetón</p>
                                {handlePaws(catData.playfulness)}
                            </div>
                            <div>
                                <p className="text-[1.3rem]">Familiero</p>
                                {handlePaws(catData.family_friendly)}
                            </div>
                            <div>
                                <p className="text-[1.3rem]">Cuidado del pelaje</p>
                                {handlePaws(catData.grooming)}
                            </div>
                            <div>
                                <p className="text-[1.3rem]">Pérdida del pelaje</p>
                                {handlePaws(catData.shedding)}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CatModal;
