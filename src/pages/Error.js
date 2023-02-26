import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Error = () => {
  return (
    <div>
      <h1>404 Page not Found</h1>
      <p>
        <Link to="/" element={<Dashboard />}>
          Dashboard
        </Link>
      </p>
    </div>
  );
};
export default Error;
