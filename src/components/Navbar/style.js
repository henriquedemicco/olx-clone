import styled from 'styled-components';

export const NavbarStyle = styled.nav`
    padding: 20px 50px;
    background-color: #FFF;

    img {
        width: 60px;
        margin-right: 20px;
    }

    .navbar-toggler i {
        color: #6e0ad6;
        font-size: 26px;
    }

    @media screen and (max-width: 991px) {
        padding: 20px 10px;

        img {
            margin: 0;
            margin-bottom: 20px;
        }

        .navbar-toggler {
            margin-bottom: 20px;
        }
    }
`;