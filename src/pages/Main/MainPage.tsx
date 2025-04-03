import Greating from "widgets/Greetings/ui/Greating";
import Timer from "widgets/Timer/ui/Timer";
import DressCode from "widgets/DressCode/ui/DressCode";
import TimeLine from "widgets/TimeLine/ui/TimeLine";
import Locations from "widgets/Locations/ui/locations/Locations";
import Accommodation from "widgets/Accommodation/ui/Accommodation";
import Wishlist from "widgets/Wishlist/ui/Wishlist";
import cls from "./MainPage.module.scss";
import Start from "widgets/Start/ui/Start";
import Questionnaire from "widgets/Questionnaire/ui/Questionnaire";
import Flowers from "src/widgets/Flowers/ui/Flowers";
import Contacts from "src/widgets/Contacts/ui/Contacts";
import Final from "src/widgets/Final/ui/Final";

export default function MainPage() {
  return (
    <div className={cls.main}>
      <div className={cls.container}>
        <Start />
        <Greating />
        <Timer />
        <TimeLine />
        <Questionnaire />
        <DressCode />
        <Flowers />
        <Locations />
        <Contacts />
        <Final />
        {/* <Accommodation />
        <Wishlist /> */}
      </div>
    </div>
  );
}
