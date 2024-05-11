import Button from "@/components/common/Button/Button";
import { TTypeColor } from "@/types/common/buttonType";
import { BannerContainer } from "./style";
import { ReactComponent as IconWork } from "@/assets/icons/work 1.svg";
import { ReactComponent as IconPlay } from "@/assets/icons/play-circle.5 1.svg";
import { ReactComponent as Layer } from "@/assets/icons/layer.svg";
import { ReactComponent as Send } from "@/assets/icons/send 1.svg";
import { ReactComponent as AddUser } from "@/assets/icons/add-user 1.svg";
import { ReactComponent as Location } from "@/assets/icons/location 1.svg";
import Image1 from "@/assets/images/Rectangle 1.png";
import Image2 from "@/assets/images/Rectangle 2.png";
import Image3 from "@/assets/images/Rectangle 3.png";
import Shape from "@/components/common/Shape/Shape";
import { EShape } from "@/types/common/ShapeType";
import { theme } from "@/themes";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner-container">
        <div className="banner-left">
          <Button
            text="Explore the world!"
            iconRight={<IconWork />}
            bgColor={TTypeColor.WHITE}
            boxShadow="true"
          />
          <h1>
            Travel <b>top destination </b> of the world
          </h1>
          <p>
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="banner-button">
            <Button
              text="Get Started"
              bgColor={TTypeColor.INDIGO}
              boxShadow="true"
            />
            <Button
              text="Watch Demo"
              iconLeft={<IconPlay />}
              bgColor={TTypeColor.WHITE}
              border="true"
            />
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-right-column">
            <div className="banner-right-boximg">
              <img src={Image1} alt="" className="border" />
              <div className="banner-right-boximg-isend">
                <Shape
                  icon={<Send />}
                  typeShape={EShape.CIRCLE}
                  bgcolor={theme.pallete.text.primary}
                  size="lg"
                  boxShadow="true"
                />
              </div>
            </div>

            <img src={Image2} alt="" className="border" />
          </div>
          <div className="banner-right-column">
            <img src={Image3} alt="" />
            <div className="icon-addUser">
              <Shape
                icon={<AddUser />}
                typeShape={EShape.CIRCLE}
                bgcolor={theme.pallete.color.orange}
                size="lg"
                boxShadow="true"
              />
            </div>
            <div className="icon-location">
              <Button
                iconLeft={<Location />}
                text="Top Places"
                bgColor={TTypeColor.WHITE}
                boxShadow="true"
              />
            </div>
          </div>
          <div className="banner-right-layer">
            <Layer />
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;
