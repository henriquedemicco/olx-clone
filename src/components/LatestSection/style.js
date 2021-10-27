import styled from 'styled-components';

export const LatestSectionStyle = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
        padding: 0;
    }

    @media screen and (max-width: 1300px) {
        ul {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (max-width: 1050px) {
        ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media screen and (max-width: 800px) {
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 542px) {
        ul {
            grid-template-columns: auto;
        }

        ul li {
            margin: auto;
            width: 260px;
        }
    }

    @media screen and (max-width: 355px) {
        ul li {
            margin: auto;
            width: 95%;
        }
    }
`;