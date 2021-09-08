/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import logo from "../../../Logo/logo.png";

const HeroNavLogo = () => <img css={styles} src ={logo} alt="logo" />;
 //<h2 css={styles}>MovieApp</h2>;

const styles = css`
  height: 100px;
  width: 100%;

`;

export default HeroNavLogo;