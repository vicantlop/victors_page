import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import NoPage from './components/NoPage';

const Sections = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    )
}

export default Sections;