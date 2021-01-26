import styled from 'styled-components';

export const Container = styled.div`
width: 275px;
height: 275px;
border-radius: 15px;
background: ${props=> props.theme.theme.cardColor};
@media only screen and (max-width: 450px) {
        display:none;
}
`;