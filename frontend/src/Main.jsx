import { Routes, Route } from 'react-router-dom';
import DoLogin from './routes/login';
import CreateProject from './routes/createProject';

const Main = () => {
    return (
        <Routes>
        <Route path="/" element={<DoLogin />} />
        <Route path="/createProject" element={<CreateProject />} />
        </Routes>
    );
};

export default Main;