import styled from 'styled-components';

export const FooterStyle = styled.div`
    .footer-content {
        width: 100%;
        padding: 50px 140px;

        .bottom-txt {
            width: 100%;
            display: flex;
            justify-content: flex-start !important;

            p {
                font-size: 0.7rem;
                color: #858585;
            }
        }

        nav {
            display: flex;
            margin-bottom: 40px;


            li {
                list-style-type: none;
                margin-right: 20px;
                font-size: 0.9rem;
                cursor: pointer;
        
        
                :hover {
                    color: #6e0ad6 !important;
                    text-decoration: underline;
                }
            }
        }

        .right-nav {
            nav {
                justify-content: flex-end;
            }

            li {
                border-radius: 50%;
                font-size: 1.3rem;
                color: #858585;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none !important;

                :not( :last-child) {
                    margin-right: 20px;
                }

                :hover {
                    color: #FFF !important;
                }
            }

            .li-face {
                :hover {
                    background-color: #2c4b9c;
                    transition: 0.5s;
                }
                :not( :hover) {
                    background-color: transparent;
                    transition: 0.5s;
                }
            }

            .li-yt {
                :hover {
                    background-color: red;
                    transition: 0.5s;
                }
                :not( :hover) {
                    background-color: transparent;
                    transition: 0.5s;
                }
            }

            .li-in {
                :hover {
                    background-color: #2d69eb;
                    transition: 0.5s;
                }
                :not( :hover) {
                    background-color: transparent;
                    transition: 0.5s;
                }
            }

            .li-insta {
                :hover {
                    background-color: #d64077;
                    transition: 0.5s;
                }
                :not( :hover) {
                    background-color: transparent;
                    transition: 0.5s;
                }
            }

            .li-twit {
                :hover {
                    background-color: #4580ff;
                    transition: 0.5s;
                }
                :not( :hover) {
                    background-color: transparent;
                    transition: 0.5s;
                }
            }

    }

    @media screen and (max-width: 991px) {
        .right-nav {
            nav {
                justify-content: center;
            }
        }

        .left-nav {
            nav {
                justify-content: center;
            }
        }
    }

    @media screen and (max-width: 620px) {
        .left-nav, .right-nav {
            nav {
                flex-direction: column;
                align-items: center;
            }

            li {
                margin-bottom: 20px;
            }
        }
    }

    @media screen and (max-width: 450px) {
            padding: 50px 20px;
        }

        .left-nav {
            padding: 0;
            li {
                margin-right: 0;
                width: 150px;
                text-align: center;
            }
        }

    }
`;