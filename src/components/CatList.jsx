import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CatList = () => {
    const offset = useSelector((state) => state.offset.value);
    const search = useSelector((state) => state.search.value);

    console.log(search);

    // if(search){

    // }

    // useEffect(()=> {
        //https://api.api-ninjas.com/v1/cats?name=${search} 
    // }, [offset, search])

    const { data, error, loading } = useFetch(
        `https://api.api-ninjas.com/v1/cats?${search ? `name=${search}` : `min_weight=1&offset=${offset}`}`
    );
    //console.log(data);
    return (
        <section className="flex justify-center items-center flex-wrap">
            {data?.map((cat) => {
                return (
                    <div key={cat.name} className="overflow-hidden w-[400px]">
                        <img
                            src={cat.image_link}
                            alt={cat.name}
                            className="w-[350px] h-[350px] object-cover transition duration-500 hover:scale-105"
                        />
                        <p>{cat.name}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default CatList;
