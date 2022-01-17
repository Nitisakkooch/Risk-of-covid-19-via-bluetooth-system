import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import * as colors from "../assets/colors.json"

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  height: 2rem;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled(Menu)`
  cursor: pointer;
  display: none;
  transition: all 0.3s ease-in-out;
  margin-left: 1rem;
  @media (max-width: 768px) {
    display: block;
    transition: all 0.3s ease-in-out;
  }
`;

export const ContainerDetailsUser = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  padding-left: 8rem;
  margin: 0 -1rem 0 0;
  background-color: ${colors.primary};
  position: relative;
  height: 2rem;
  @media (max-width: 425px) {
    padding-left: 3rem;
  }

  & > h3 {
    margin: 0;
    margin-right: 1rem;
    color: ${colors.textInverse};
    @media (max-width: 425px) {
      display: none;
    }
  }
`;

export const Parallelogram = styled.div`
  top: 0;
  bottom: 0;
  position: absolute;
  left: ${({ left }: { color?: string; left?: number }) => `${left || 0}rem`};
  width: 2rem;
  transform: skew(-30deg);
  background: ${({ color }: { color?: string; left?: number }) =>
    color || "#000"};
`;

export const Avatars = styled(Avatar)`
  @media (max-width: 425px) {
    display: none;
  }
`;
