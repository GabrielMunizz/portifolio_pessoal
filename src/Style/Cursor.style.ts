import { motion } from "framer-motion";
import styled from "styled-components";

export const Cursor = styled(motion.li)`
  position: absolute;
  z-index: 0;
  height: 3rem;
  border-radius: 99px;
  background-color: ${(props) => props.theme.colors.text_details};
`;
