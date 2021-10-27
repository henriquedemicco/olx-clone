import styled from 'styled-components';

export const StatesListStyle = styled.ul`
    margin: 20px 0 0 0;
    display: grid;
    width: 85%;
    grid-template-columns: repeat(28, auto);
    padding: 0;

    li {
        list-style-type: none;
        margin-right: 10px;

        a {
            color: #6e0ad6 !important;
            text-decoration: none;

            :hover {
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(14, auto);
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(8, auto);
        width: 100%;
    }

    @media screen and (max-width: 420px) {
        grid-template-columns: 1fr;
        display: none;
    }
`;