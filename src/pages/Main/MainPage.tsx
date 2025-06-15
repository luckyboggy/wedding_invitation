import { useState } from "react";
import Greating from "widgets/Greetings/ui/Greating";
import Timer from "widgets/Timer/ui/Timer";
import DressCode from "widgets/DressCode/ui/DressCode";
import TimeLine from "widgets/TimeLine/ui/TimeLine";
import Locations from "widgets/Locations/ui/locations/Locations";
import Accommodation from "widgets/Accommodation/ui/Accommodation";
import Wishlist from "widgets/Wishlist/ui/Wishlist";
import Cars from "src/widgets/Cars/ui/Cars";
import cls from "./MainPage.module.scss";
import Start from "widgets/Start/ui/Start";
import Questionnaire from "widgets/Questionnaire/ui/Questionnaire";
import Flowers from "src/widgets/Flowers/ui/Flowers";
import Contacts from "src/widgets/Contacts/ui/Contacts";
import Final from "src/widgets/Final/ui/Final";
import AreaRules from "src/widgets/AreaRules/ui/AreaRules";
import SecondDay from "src/widgets/SecondDay/ui/SecondDay";
import DividingLine from "src/shared/ui/DividingLine/DividingLine";

// Импортируем изображение сюда
import mainImage from "shared/assets/images/main_01.jpg";
import Resettlement from "src/widgets/Resettlement/ui/Resettlement";

export default function MainPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={cls.loader}>
          <div className={cls.spinner}></div>
        </div>
      )}

      <img
        src={mainImage}
        onLoad={() => setLoaded(true)}
        alt="preload"
        style={{ display: "none" }}
      />

      {loaded && (
        <div className={cls.main}>
          <div className={cls.container}>
            <Start />
            <Greating />
            <Timer />
            <TimeLine />
            {/* <Questionnaire /> */}
            <DressCode />
            <Flowers />
            <Locations />
            <Cars />
            <Resettlement />
            <AreaRules />
            <SecondDay />
            <br />
            <DividingLine />
            <Contacts />
            <br />
            <DividingLine />
            <Final />
          </div>
        </div>
      )}
    </>
  );
}
