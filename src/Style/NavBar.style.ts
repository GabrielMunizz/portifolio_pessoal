import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-radius: 40px;
  width: 20%;
  padding: 1rem;
  list-style: none;
`;
