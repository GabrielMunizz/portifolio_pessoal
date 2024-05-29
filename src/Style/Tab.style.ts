import { motion } from "framer-motion";
import styled from "styled-components";

export const Tab = styled(motion.a)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.main_text_color};
  font-size: 1.5rem;
  position: relative;
  z-index: 10;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.text_hover_color};
    transition: 0.3s ease;
  }
`;
