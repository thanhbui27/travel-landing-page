import Carousel from "@/components/common/Carousel";
import { LogoPartnerContainer } from "./style";
import { dataLogoPartner, settings } from "@/constants/LogoPartner";

const LogoPartner = () => {
  return (
    <LogoPartnerContainer>
      <Carousel settings={settings}>
        {dataLogoPartner.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img src={logo.logo} alt="" />
          </div>
        ))}
      </Carousel>
    </LogoPartnerContainer>
  );
};

export default LogoPartner;
