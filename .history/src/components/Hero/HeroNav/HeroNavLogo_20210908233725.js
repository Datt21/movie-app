/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import logo from "../../../Logo/logo.png";

const HeroNavLogo = () => <img css={styles} src ={logo} alt="logo" />;
 //<h2 css={styles}>MovieApp</h2>;

const styles = css`
  font-size: 22px; 
  color: #cb6ad2;
  font-weight: 900;
  user-select: none;
`;

export default HeroNavLogo;