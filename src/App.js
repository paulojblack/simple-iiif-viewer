import React from 'react'
import OpenSeaDragonViewer from './OSDViewer'
import SingleViewer from './SingleViewer';

export function App() {
    return (
        <div>
            <SingleViewer image='https://image.dma.org/iiif/2/development__objects__4171219__297048232__pyramid.tif/info.json' />
        </div>
    );
}