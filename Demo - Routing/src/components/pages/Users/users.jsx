import { Link, Outlet } from 'react-router-dom';

const Users = () => {

    const userId = 42;

    return (
        <>
            <p>Je suis la page des Users</p>

            <Link to={`/users/${userId}`}>Grimgor Ironhide</Link>

            <Outlet />
        </>

    )
}

export default Users;