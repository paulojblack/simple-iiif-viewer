import OpenSeaDragon from 'openseadragon';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Shell = styled.div`
    height: 100%;
    width: 100%;
`
const OpenSeaDragonViewer = ({ image }) => {
    useEffect(() => {
        OpenSeaDragon({
            id: "osd",
            tileSources: [image],
            showNavigationControl: false,
            // animationTime: 0.5,
            // blendTime: 0.1,
            // constrainDuringPan: true,
            // maxZoomPixelRatio: 2,
            // minZoomLevel: 1,
            visibilityRatio: 1,
            zoomPerScroll: 2
        })
    })
   
    return (
        <Shell id="osd" />
    );
};

export default OpenSeaDragonViewer;