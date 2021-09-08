/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import logo from "../../../Logo/logo.png";

const HeroNavLogo = () => <img css={styles} src ={logo} alt="logo" />;
 //<h2 css={styles}>MovieApp</h2>;

const styles = css`
  height: infinite;

`;

export default HeroNavLogo;