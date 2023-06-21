import useFetch from '@/hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';
import woolBall from '@/assets/wool-ball.png';

const CatList = () => {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.offset.value);
    const search = useSelector((state) => state.search.value);

    const handleCatData = (data) => {
        dispatch(changeValue(data));
    };

    const { data, error, loading } = useFetch(
        `https://api.api-ninjas.com/v1/cats?${
            search ? `name=${search}` : `min_weight=1&offset=${offset}`
        }`
    );

    return (
        <section className="flex justify-center flex-wrap gap-4 mb-10 min-h-[80vh]">
            {loading ? (
                <img src={woolBall} className="animate-spin w-[100px] self-start mt-6" />
            ) : (
                data?.map((cat) => {
                    return (
                        <div
                            key={cat.name}
                            onClick={() => handleCatData(cat)}
                            className="overflow-hidden w-[300px] cursor-pointer"
                        >
                            <img
                                src={cat.image_link}
                                alt={cat.name}
                                className="w-[300px] h-[300px] object-cover rounded-[14px]"
                            />
                            <p className="font-bold">{cat.name}</p>
                        </div>
                    );
                })
            )}
        </section>
    );
};

export default CatList;
