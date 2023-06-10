import { Provider } from 'react-redux';
import CatList from '@/components/CatList';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import { store } from '@/redux/store';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <CatList />
            <Pagination />
        </Provider>
    );
}

export default App;
