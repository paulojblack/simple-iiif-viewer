import styled from 'styled-components';
import OSDViewer from './OSDViewer';

const Shell = styled.div`
    width: ${props => props.viewerWidth};
    height: ${props => props.viewerHeight};
`;

const SingleViewer = ({image, width="600px", height="400px"}) => {

    return (
        <Shell viewerWidth={width} viewerHeight={height}>
            <OSDViewer image={image} />
        </Shell>
    )
}

export default SingleViewer