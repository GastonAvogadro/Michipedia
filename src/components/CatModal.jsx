import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';

const CatModal = () => {
    const dispatch = useDispatch();
    const catData = useSelector((state) => state.catData.value);

    const handleData = () => {
        dispatch(changeValue([]));
    };

    return (
        <>
            {catData.length !== 0 && (
                <div
                    onClick={handleData}
                    className="h-screen w-screen fixed top-0 bg-black/70 flex justify-center items-center"
                >
                    <div onClick={(e) => e.stopPropagation()} className="w-[500px] h-[500px] bg-white opacity-100">
                        <p onClick={handleData}>close</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CatModal;
