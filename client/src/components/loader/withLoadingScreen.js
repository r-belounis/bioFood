import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
    function Loader(props) {
        const [isLoading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading);
        };

        return (
            <>
            {isLoading &&
            <div
            style={{
                height: "calc(100vh - 80px)",
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
            }}
            >
                <Spinner animation="grow" variant="primary" message={loadingMessage} />
            </div>
            }
            <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        );
    }
    return Loader;
}

export default IsLoadingHOC;