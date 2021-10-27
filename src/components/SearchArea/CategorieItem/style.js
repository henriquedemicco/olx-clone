import styled from 'styled-components';

export const CategorieItemStyle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    p {
        color: #FFF;
        font-size: 11px;
        margin-top: 5px;
        max-width: 100px;
        text-align: center;
    }

    span {
        background-color: #FFF;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
            font-size: 28px;
        }
    }
`;