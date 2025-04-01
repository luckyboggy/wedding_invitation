import Carousel from "src/shared/ui/Carousel/Carousel";
import cls from "./DressCode.module.scss";

export default function DressCode() {
  return (
    <div className={cls.dressCode}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <p>Дресс-код</p>
        </div>
        <div className={cls.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum labore totam quasi magnam ipsam mollitia esse, quia excepturi?
            Natus!
          </p>
        </div>
        <div className={cls.references}>
          <Carousel />
          {/* <div className={cls.images}>
            <img className={cls.img} src="#" alt="Image 1" />
            <img className={cls.img} src="#" alt="Image 1" />
            <img className={cls.img} src="#" alt="Image 1" />
            <img className={cls.img} src="#" alt="Image 1" />
            <img className={cls.img} src="#" alt="Image 1" />
            <img className={cls.img} src="#" alt="Image 1" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
