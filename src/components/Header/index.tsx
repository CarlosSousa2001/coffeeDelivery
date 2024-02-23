import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartIcon, HeaderContainer, NavContainer } from "./styles";
import logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
      </div>
      <NavContainer>
        <div>
          <MapPin size={32} />
          <p>Porto Alagre, RS</p>
        </div>
        <CartIcon>
          <ShoppingCart size={32} color="#C47F17"/>
        </CartIcon>
      </NavContainer>
    </HeaderContainer>
  );
}
