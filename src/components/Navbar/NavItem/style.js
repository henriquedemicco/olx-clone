import styled from 'styled-components';

export const NavItemStyle = styled.li`
    display: flex;
    align-items: center;
    color: #525252;
    margin-right: 25px;

    .nav-link {
        font-size: 14px;
    }

    i {
        font-size: 22px;
    }

    a, a:focus {
        color: #525252;
    }

    :hover {
        color: #6e0ad6;
        a {
            color: #6e0ad6;
        }
    }

    @media screen and (max-width: 992px) {
        i {
            margin-right: 15px;
        }
    }
`;
