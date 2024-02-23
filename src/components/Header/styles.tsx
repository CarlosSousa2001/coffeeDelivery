import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`;

export const NavContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const CartIcon = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: #F1E9C9;
  border-radius: 4px;
`