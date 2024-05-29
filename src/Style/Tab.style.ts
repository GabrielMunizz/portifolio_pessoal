import { motion } from "framer-motion";
import styled from "styled-components";

export const Tab = styled(motion.a)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  position: relative;
  z-index: 10;
  mix-blend-mode: difference;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
`;
