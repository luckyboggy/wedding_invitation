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

export default function MainPage() {
  return (
    <div className={cls.main}>
      <div className={cls.container}>
        <Start />
        <Greating />
        <Timer />
        <TimeLine />
        <DressCode />
        <Questionnaire />
        <Locations />
        <Accommodation />
        <Wishlist />
      </div>
    </div>
  );
}
