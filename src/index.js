import "./styles/index.scss";
import "@csstools/normalize.css";

import wplogo from "./img/wplogo.png";
import Logo from "./modules/Logo";

const l = (msg) => console.log(msg);
const qs = (selector) => document.querySelector(selector);

const logo = new Logo(qs(".wp-logo"), wplogo);

const main = () => {
  logo.animate();
  logo.draw();
  requestAnimationFrame(main);
}

main();