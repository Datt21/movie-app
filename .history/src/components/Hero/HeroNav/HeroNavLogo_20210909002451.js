/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import logo from "../../../Logo/logo.png";

const HeroNavLogo = () => <img css={styles} src ={logo} alt="logo" />;
 //<h2 css={styles}>MovieApp</h2>;

const styles = css`
  height: 150px;
  width: 250px;
  margin-left: -65px;
  object-fit: cover;

`;

export default HeroNavLogo;