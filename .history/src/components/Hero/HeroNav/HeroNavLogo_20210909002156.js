/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import logo from "../../../Logo/logo.png";

const HeroNavLogo = () => <img css={styles} src ={logo} alt="logo" />;
 //<h2 css={styles}>MovieApp</h2>;

const styles = css`
  height: 150px;
  width: 200px;
  margin-left: -70px;

`;

export default HeroNavLogo;