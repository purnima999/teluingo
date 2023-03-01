import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNavigation = (props) => {
    const navigate = useNavigate();
    const redirectRoute = () => navigate('/Home');
    return (
        <>
            
        </>
    )
}
export default PageNavigation;