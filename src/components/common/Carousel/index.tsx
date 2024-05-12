import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICarousel {
  settings: Settings;
  children: React.ReactNode;
}

const Carousel: React.FC<ICarousel> = ({ settings, children }) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
