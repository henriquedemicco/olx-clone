import styled from 'styled-components';

export const SearchAreaStyle = styled.div`
    background-color: #6e0ad6;
    width: 100%;
    height: 250px;
    display: grid;
    grid-gap: 35px;
    padding: 30px 100px;

    input {
        background-color: #FFF;
        border: none;
        height: 60px;
        font-size: 20px;
        color: #525252;
        border-radius: 5px 0 0 5px;

        :focus {
            box-shadow: none !important;
        }
    }

    .search-field {
        display: flex;

        span {
            width: 65px;
            background-color: #FFF;
            border-radius: 0 5px 5px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 2px solid #dcdcdc;

            i {
                font-size: 22px;
                color: #9E309E;
            }

            :hover {
                background-color: #9E309E;
                border: 2px solid #dcdcdc;
                cursor: pointer;

                i {
                    color: #FFF;
                }
            }
        }
    }

    @media screen and (max-width: 950px) {
        height: auto;
    }

    @media screen and (max-width: 470px) {
        padding: 20px 40px;
    }

    @media screen and (max-width: 300px) {
        padding: 20px 10px;
    }
`;