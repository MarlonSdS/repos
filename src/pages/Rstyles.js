import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Loading = styled.div`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: rgba(0,0,0, 0.1);
    padding: 30px;
    margin: 80px auto;
`

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    h1{
        color: #0D2636;
        font-size: 30px;
    }

    p{
        color: #000;
        font-size: 14px;
        text-align: center;
        line-height: 1.5;
        max-width: 400px;
    }
`

export const BackButton = styled(Link)`
    border: none;
    padding: 2px;
    font-size: 20px;
    background-color: transparent;
`

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;

        img{
            width: 45px;
            height: 45px;
            border: 1px solid #0D2636;
            border-radius: 50%;
        }

        div{
            flex: 1;
            margin-left: 12px;

            p{
                color: #000;
                font-size: 12px;
                margin-top: 10px;
            }
        }

        strong{
            font-size: 15px;

            a{
                text-decoration: none;
                color: #222;
                transition: 0.5s;

                &:hover{
                    color: #0071db;
                }
            }

            span{
                background-color: #222;
                color: #fff;
                font-size: 12px;
                border-radius: 4px;
                font-weight: 600;
                padding: 4px 7px;
                margin-left: 10px;
            }

        }
    }
`