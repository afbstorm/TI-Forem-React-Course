import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {

    // Définit la localisation exacte de l'utilisateur via sa route
    const location = useLocation();

    // Récupération de la clé d'authentification dans le localeStorage 
    const isAuth = localStorage.getItem('authToken');

    // Si la clé n'est pas présente OU est undefined alors il ne se passe, l'user ne peut pas accèder à la route
    if (isAuth === undefined) {
        return null;
    }

    // Si au contraire ça existe (et est valide), alors tu navigues vers la route
    return isAuth ? <Outlet /> : <Navigate to={'/'} replace state={{from: location}} />
}

export default ProtectedRoutes;