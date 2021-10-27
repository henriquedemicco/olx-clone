import styled from 'styled-components';

export const DiscoverGridStyle = styled.div`
    min-height: 350px;
    border-radius: 7px;
    overflow: hidden;

    .c, .left-col, .c3-l1, .c3-l2 {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border: 1px solid #f6f6f6;
        background: rgb(0, 0, 0);
        overflow: hidden;
        cursor: pointer;
        padding: 0;

        :hover {
            img {
                transform: scale(1.3);
                transition: 1s;
            }
        }

        :not( :hover ) {
            img {
                transform: scale(1.1);
                transition: 1s;
            }
        }

        img {
            object-fit: cover;
            height: 100%;
            opacity: 0.5;
        }
    }

    .c {
        height: 175px;
    }

    .left-col {
        height: 350px;
        padding-left: 15px;
    }

    .c3-l1 {
        height: 140px;
    }
    .c3-l2 {
        height: 210px;
    }

    .card-text {
        position: absolute;
        z-index: 2;
        width: 150x;
        padding: 15px 10px;
    }

    h5 {
        color: #FFF;
        margin: 0;
        user-select: none;
    }

    p {
        font-size: 14px;
        margin: 2px;
        color: #FFF;
        user-select: none;
    }




    @media screen and (max-width: 1200px) {
        .card-text {
            padding: 10px 10px;
            width: 110px;
        }
    }

    @media screen and (max-width: 570px) {
        .card-text {
            padding: 10px 20px;
            width: 110px;
        }

        .left-col {
            padding-left: 2px;
        }
    }
`;