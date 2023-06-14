import { Provider } from 'react-redux';
import CatList from '@/components/CatList';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import CatModal from '@/components/CatModal';
import { store } from '@/redux/store';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <CatList />
            <Pagination />
            <CatModal />
        </Provider>
    );
}

export default App;
