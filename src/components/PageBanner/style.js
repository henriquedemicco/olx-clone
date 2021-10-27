import styled from 'styled-components';

export const PageBannerStyle = styled.div`
    max-height: 250px;
    background-color: #6a1fd7;
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    padding: 0;

    .bn img {
        height: 100%;
    }

    img {
        width: 350px;
        height: auto;
    }

    @media screen and (max-width: 750px) {
        justify-content: flex-end;

        .bn {
            display: none;
        }
    }

    @media screen and (max-width: 350px) {
        img {
            width: 100%;
        }
    }
`;