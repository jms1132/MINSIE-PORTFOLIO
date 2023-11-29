import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
.slick-prev,
.slick-next {
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 20px;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  background: transparent;
  color: transparent;
  outline: none;
}
.slick-prev:hover::before,
.slick-prev:focus::before,
.slick-next:hover::before,
.slick-next:focus::before {
  opacity: 1;
}
.slick-prev.slick-disabled::before,
.slick-next.slick-disabled::before {
  opacity: 0.25;
}

.slick-prev::before,
.slick-next::before {
  color: white;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  opacity: 0.75;
}

.slick-prev {
  left: -26px;
}
[dir="rtl"] .slick-prev {
  left: auto;
  right: -25px;
}
.slick-prev::before {
  background-image: url("static/img/icn-arrow-left.png");
  background-size: 24px 24px;
  content: "";
  display: inline-block;
  height: 24px;
  width: 24px;
}

/* [dir='rtl'] .slick-prev::before {
  content: '→';
} */

.slick-next {
  right: -22px;
}
[dir="rtl"] .slick-next {
  left: -25px;
  right: auto;
}
.slick-next::before {
  background-image: url("static/img/icn-arrow-right.png");
  background-size: 24px 24px;
  content: "";
  display: inline-block;
  height: 24px;
  width: 24px;
}
[dir="rtl"] .slick-next::before {
  /* content: '←'; */
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  bottom: 30px;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
.slick-dots li {
  cursor: pointer;
  display: inline-block;
  height: 20px;

  /* margin: 0 5px; */
  padding: 0;
  position: relative;
  width: 20px;
}
.slick-dots li button {
  background: transparent;
  border: 0;
  color: transparent;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  outline: none;
  padding: 5px;
  width: 20px;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover::before,
.slick-dots li button:focus::before {
  opacity: 1;
}
.slick-dots li button::before {
  color: black;
  content: "•";
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 20px;
  left: 0;
  line-height: 20px;
  opacity: 0.25;
  position: absolute;
  text-align: center;
  top: 0;
  width: 20px;
}
.slick-dots li.slick-active button::before {
  color: black;
  opacity: 0.75;
}

@media only screen and (max-width: 600px) {
  .slick-next::before {
    background-image: url("static/img/m/icn-arrow-right-m.png");
    background-size: 16px 16px;
    height: 16px;
    width: 16px;
  }
  .slick-prev::before {
    background-image: url("static/img/m/icn-arrow-left-m.png");
    background-size: 16px 16px;
    height: 16px;
    width: 16px;
  }
  .slick-dots {
    bottom: 19px;
  }
}
`;
