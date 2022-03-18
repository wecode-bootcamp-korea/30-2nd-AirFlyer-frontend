import { createGlobalStyle } from 'styled-components';
import NanumGothicExtraBold from './NanumGothic-ExtraBold.ttf';
import NanumGothicBold from './NanumGothic-Bold.ttf';
import NanumGothicRegular from './NanumGothic-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Nanum Gothic';
        font-weight: 800;
        src: url(${NanumGothicExtraBold}) format('truetype');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-weight: 700;
        src: url(${NanumGothicBold}) format('truetype');
    }

    @font-face {
        font-family: 'Nanum Gothic';
        font-weight: 400;
        src: url(${NanumGothicRegular}) format('truetype');
    }
`;
