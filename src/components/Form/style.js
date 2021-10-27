import styled from 'styled-components';

export const FormStyle = styled.div`

    .column-left, .column-right {
        display: flex;
        justify-content: center;
        padding: 10px;

        form {
            width: 100%;

            input, textarea, select {
                background-color: purple;
                width: 100%;
                color: beige;
                border-radius: 5px;
                border: 1px solid violet;
                padding: 10px;
                margin-bottom: 5px;
                font-size: 0.9rem;
            
                ::placeholder {
                    color: violet;
                }

                :focus {
                    outline: none;
                }
            }

            .price-field {
                display: flex;
                align-items: center;
            }
            .price-field span {
                display: flex;
                align-items: center;
                position: absolute;
                color: violet;
                margin-left: 5px;
                margin-bottom: 5px;
                border-right: solid 1px beige;
                padding: 2px;
                height: 20px;
                pointer-events: none;
            }
            .price {
                padding-left: 35px;
            }

            .double {
                margin: 0;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 5px;

                input, select {
                    width: 100%;
                }
            }

            .file-f {
                margin-top: 5px;
                padding: 10px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: purple;
                border-radius: 5px;

                input {
                    width: 100%;
                }

                label {
                    color: violet;
                }
            }

            .buttons {
                display: flex;
                padding: 20px 10rem;
                justify-content: space-around;
            }
        }

    }
    .column-left img {
        width: 100%;
        min-height: 100px;
        border-radius: 10px;
    }

    @media screen and (max-width: 400px) {
        .buttons {
            width: 100%;
            height: 110px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0 !important;
        }
    }
`;