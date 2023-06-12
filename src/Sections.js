import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NoPage from './components/NoPage';

const Sections = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}

export default Sections;