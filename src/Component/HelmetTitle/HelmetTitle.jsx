
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
const HelmetTitle = ({routeName}) => {
    return (
        <div>
            <Helmet>
                <title> {routeName} | Manage Our Asset with Team </title>
            </Helmet>
        </div>
    );
};
HelmetTitle.propTypes = {
    routeName : PropTypes.node,
}

export default HelmetTitle;