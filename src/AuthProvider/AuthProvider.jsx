import { createContext } from 'react';
import Proptypes from 'prop-types'
export const AuthCustomContext = createContext(null)
const AuthProvider = ({children}) => {
    const userInfo = {}
    return (
        <AuthCustomContext.Provider value={userInfo}>
            {children}
        </AuthCustomContext.Provider>
    );
};
AuthProvider.propTypes = {
    children : Proptypes.node,
}
export default AuthProvider;