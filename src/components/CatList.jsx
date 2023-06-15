import useFetch from '@/hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';

const CatList = () => {
    const dispatch = useDispatch();
    const offset = useSelector((state) => state.offset.value);
    const search = useSelector((state) => state.search.value);


    const handleCatData = (data)=>{
        dispatch(changeValue(data))
    }

    const { data, error, loading } = useFetch(
        `https://api.api-ninjas.com/v1/cats?${search ? `name=${search}` : `min_weight=1&offset=${offset}`}`
    );

    return (
        <section className="flex justify-center items-center flex-wrap gap-4">
            {data?.map((cat) => {
                return (
                    <div key={cat.name} onClick={()=>handleCatData(cat)} className="overflow-hidden w-[350px] cursor-pointer">
                        <img
                            src={cat.image_link}
                            alt={cat.name}
                            className="w-[350px] h-[350px] object-cover"
                        />
                        <p>{cat.name}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default CatList;
