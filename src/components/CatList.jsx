import useFetch from '../hooks/useFetch';

const CatList = () => {
    const { data, error, loading } = useFetch(
        'https://api.api-ninjas.com/v1/cats?min_weight=1&offset=0'
    );
    console.log(data);
    return (
        <section className='flex flex-wrap'>
            {data?.map((cat) => {
                return (
                    <div className="overflow-hidden w-[400px]">
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
