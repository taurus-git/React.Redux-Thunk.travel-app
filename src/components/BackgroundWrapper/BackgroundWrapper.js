import React from 'react';

const BackgroundWrapper = ( props ) => {
    return (
        <div className="background-wrapper">
            { props.children }
        </div>
    );
};

export default BackgroundWrapper;
