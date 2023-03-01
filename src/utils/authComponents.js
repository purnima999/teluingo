import React from 'react';
import { useSelector } from 'react-redux';

const AuthComponents = () => {

    const authComp = useSelector((state) => state?.authReducer?.cmp || undefined);

    console.log("authComp==>", authComp);

    return (
        <>
            {authComp &&
                <>
                    <div>
                        <authComp.componentName />
                    </div>
                    <div className="popup-backdrop">
                    </div>
                </>
            }
        </>
    )
}

export default (AuthComponents);