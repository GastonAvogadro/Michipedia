import { useDispatch, useSelector } from 'react-redux';
import michiHeader from '@/assets/michiHeader.svg';
import arrow from '@/assets/arrow.svg';
import { decrement, increment } from '@/redux/slices/offsetSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.offset.value);
    const search = useSelector((state) => state.search.value);

    const handleOffset = (action) => {
        if (action === 'increment') {
            if (offset.value < 80) {
                dispatch(increment());
            }
        }
        if (action === 'decrement') {
            if (offset.value > 0) {
                dispatch(decrement());
            }
        }
    };

    return (
        <>
            {search === '' && (
                <div className="flex justify-center items-center gap-4">
                    {console.log(search.value)}
                    <div
                        className={`flex ${offset.value < 20 ? 'opacity-20' : 'cursor-pointer'}`}
                        onClick={() => handleOffset('decrement')}
                    >
                        <img src={arrow} className="w-[20px]" alt="arrow" />
                        <img src={michiHeader} className="w-[50px] scale-x-[-100%]" />
                    </div>
                    <p>{offset}</p>
                    <div
                        className={`flex ${offset.value > 60 ? 'opacity-20' : 'cursor-pointer'}`}
                        onClick={() => handleOffset('increment')}
                    >
                        <img src={michiHeader} className="w-[50px]" />
                        <img src={arrow} className="w-[20px] scale-x-[-100%]" alt="arrow" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Pagination;
