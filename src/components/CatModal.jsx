import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';
import paw_empty from '@/assets/paw-empty.png';
import paw_full from '@/assets/paw-full.png';

const CatModal = () => {
    const dispatch = useDispatch();
    const catData = useSelector((state) => state.catData.value);

    const handleData = () => {
        dispatch(changeValue([]));
    };

    const handlePaws = (num) => {
        let paws = [...Array(5)].map((paw, i) => {
            return <img key={i} src={i < num ? paw_full : paw_empty} className='w-[30px]'/>;
        });

        return (
            <div className='flex'>
                {paws}
            </div>
        )
    };

    return (
        <>
            {catData.length !== 0 && (
                <div
                    onClick={handleData}
                    className="h-screen w-screen fixed top-0 bg-black/70 flex justify-center items-center"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="min-w-[80%] min-h-[90vh] bg-white opacity-100 rounded-[14px] flex justify-center items-center gap-10 relative"
                    >
                        <p onClick={handleData} className="absolute top-5 right-5 cursor-pointer">
                            close
                        </p>
                        <div className="w-[450px] h-[450px]">
                            <img
                                src={catData.image_link}
                                className="w-[450px] h-[450px] object-cover rounded-[14px]"
                                alt={catData.name}
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-[2rem] mb-6">{catData.name}</h3>
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
                    </div>
                </div>
            )}
        </>
    );
};

export default CatModal;
