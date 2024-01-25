import { styled } from 'styled-components';


export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.text_details};

  @media (max-width: 1185px) and (max-height: 820px) {
    font-size: 16px
  }

  @media (max-width: 411px) and (max-height: 731px) {
    font-size: 14px;    
  }

  @media (max-width: 375px) and (max-height: 812px) {
    font-size: 14px;    
  }
`;
