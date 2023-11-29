/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

const SliderArrow = (props: any) => {
  const { currentSlide, slideCount, ...others } = props;
  return <div {...others}>{props.children}</div>;
};
export default SliderArrow;
