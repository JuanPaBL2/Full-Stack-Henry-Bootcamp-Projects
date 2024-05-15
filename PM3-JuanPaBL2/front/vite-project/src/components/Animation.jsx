import { useEffect } from "react";
import React from "react";

const MyComponentAnimation = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer@1.1.3/build/spline-viewer.js';
        script.type = 'module';
        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <spline-viewer url="https://prod.spline.design/sDKE11yGiAij2oWh/scene.splinecode"></spline-viewer>
    );
};

export default MyComponentAnimation;
