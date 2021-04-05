import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Background = styled.div`

    width: 100%;
    height: 90vh;
    background-color: ${colors.background};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    @media(max-width: 750px){
        flex-direction: column;
        margin-top: 8vh;
        overflow-x: hidden;
    }

`;

export const Button = styled.div`
    width: 80%;
    height: 12%;
    background-color: ${colors.primary};
    align-items: center;
    border-radius: 1vw;
    justify-content: center;
    display: flex;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 1px solid black;
    font-family: Montserrat;
    font-weight: bold;

    @media(max-width: 750px){
        width: 80%;
        height: 20%;
    }
`;

export const Center = styled.div`
width: 30%;
height: 60%;
background: ${colors.secondary};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
overflow: hidden;
border-radius: 1.5vw;
box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
margin-left: 35%;
border: 2px solid ${colors.primary};;
@media(max-width: 750px){
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10vh;
}
`;