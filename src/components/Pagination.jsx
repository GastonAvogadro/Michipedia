import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/redux/slices/offsetSlice';
import catPagination from '@/assets/catPagination.svg';
import arrow from '@/assets/arrow.svg';

const Pagination = () => {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.offset.value);
    const search = useSelector((state) => state.search.value);

    const handleOffset = (action) => {
        if (action === 'increment') {
            if (offset < 80) {
                dispatch(increment());
            }
        }
        if (action === 'decrement') {
            if (offset > 0) {
                dispatch(decrement());
            }
        }
    };

    return (
        <>
            {search === '' && (
                <div className="flex justify-center items-center gap-4 p-10">
                    <div
                        className={`flex ${offset < 20 ? 'opacity-20' : 'cursor-pointer'}`}
                        onClick={() => handleOffset('decrement')}
                    >
                        <img src={arrow} className="w-[20px]" alt="arrow" />
                        <img src={catPagination} className="w-[50px] scale-x-[-100%]" />
                    </div>
                    <p>{offset}</p>
                    <div
                        className={`flex ${offset > 60 ? 'opacity-20' : 'cursor-pointer'}`}
                        onClick={() => handleOffset('increment')}
                    >
                        <img src={catPagination} className="w-[50px]" />
                        <img src={arrow} className="w-[20px] scale-x-[-100%]" alt="arrow" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Pagination;
