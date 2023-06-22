import useFetch from '@/hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '@/redux/slices/catDataSlice';
import { motion } from 'framer-motion';
import woolBall from '@/assets/wool-ball.png';
import notFound from '@/assets/notFound.svg';

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
            {error ? (
                <div>Ocurrió un error con la conexión 🙀</div>
            ) : loading ? (
                <img src={woolBall} className="animate-spin w-[100px] self-start mt-6" />
            ) : data.length !== 0 ? (
                data.map((cat) => {
                    return (
                        <motion.div
                            key={cat.name}
                            onClick={() => handleCatData(cat)}
                            className="w-[300px] cursor-pointer"
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img
                                src={cat.image_link}
                                alt={cat.name}
                                className="w-[300px] h-[300px] object-cover rounded-[14px] border-[#ffb152] border-2"
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                            />
                            <p className="font-bold">{cat.name}</p>
                        </motion.div>
                    );
                })
            ) : (
                <div>
                    <p>No hay gatos por acá. ¡Vuelve a intentarlo!</p>
                    <img src={notFound} alt="cat not found" className="w-[300px]" />
                </div>
            )}
        </section>
    );
};

export default CatList;
