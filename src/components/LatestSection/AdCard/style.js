import styled from 'styled-components';

export const AdCardStyle = styled.li`
    width: 200px;
    height: 280px;
    padding: 10px;
    background: #f7f7f7;
    list-style-type: none;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    cursor: pointer;
    : hover {
        border-bottom: 5px solid purple;
    }

    .ad-title .modal-title {
        margin: 5px;
    }

    .ad-title p {
        font-size: 0.8em;
        margin-left: 10px;
        color: gray;
    }

    .ad-title p::before {
        content: "> ";
        color: orange;
        font-weight: bold;
    }


    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
        border-radius: 7px 7px 0 0;
    }

    .more-info-btn {
        height: 55px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .more-info-btn button {
        border: none;
        color: #f78323;
        background: transparent;
    }

    .more-info-btn i {
        margin-right: 10px;
        color: orangered;
    }

    .modal-body img {
        border-radius: 0;
        height: auto;
        max-height: 300px;
    }

    .modal-body p {
        background: #f7f7f7;
        padding: 10px;
    }
`;