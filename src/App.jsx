import Layout from './components/layout/Layout';

import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

const App = () => {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Projects />
        </Layout>
    );
};

export default App;