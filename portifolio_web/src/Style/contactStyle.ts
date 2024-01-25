import styled from 'styled-components';

export const Contact = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
width: 100%;
height: calc(100vh - 100px);
`

export const ContactSection = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 400px;
height: 200px;
border: 1px solid ${(props) => props.theme.colors.main_text_color};

& span {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

& div h4 {
margin: 8px;
}

& div a {
color: ${(props) => props.theme.colors.text_details};
};
`