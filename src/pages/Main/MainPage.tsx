import Greating from "widgets/Greetings/ui/Greating";
import Timer from "widgets/Timer/ui/Timer";
import DressCode from "widgets/DressCode/ui/DressCode";
import TimeLine from "widgets/TimeLine/ui/TimeLine";
import Locations from "widgets/Locations/ui/locations/Locations";
import Accommodation from "widgets/Accommodation/ui/Accommodation";
import Wishlist from "widgets/Wishlist/ui/Wishlist";
import cls from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={cls.main}>
      <div className={cls.container}>
        <Greating />
        <Timer />
        <TimeLine />
        <DressCode />
        <Locations />
        <Accommodation />
        <Wishlist />
      </div>
    </div>
  );
}
