import { FC, useState } from "react";
import cls from "./Flowers.module.scss";

import img from "shared/assets/images/gortenzia.jpg";
import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

const Flowers: FC = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={cls.flowers}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Цветы и подарки</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          <p>
            Мы будем очень рады, если вы подарите нам на регистрацию в ЗАГСе
            цветы: белые или зеленые гортензии! Мы хотим добавить их в декор и
            провести мастер-класс по изготовлению бутоньерок.
          </p>
          <p>
            Это может быть букет с гортензией и добавлением любых других цветов 
            или просто одна гортензия. Если вы переживаете, что не найдёте
            гортензии в сам день, то можно заказать их заранее.
          </p>
          <img src={img} alt="Main image" />
          <p>Вот пример знакомых цветочных:</p>

          <div className={cls.links}>
            <a
              href="https://dkflowershouse.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>D&K Flowers House</p>
              <ArrowIcon className={cls.linkArrow}/>
            </a>
            <a
              href="https://vk.com/teddyflowers?ysclid=m905ham90560858298"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>TEDDY FLOWERS</p>
              <ArrowIcon className={cls.linkArrow}/>
            </a>
            <a
              href="https://theatre-flowers.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Театр цветов</p>
              <ArrowIcon className={cls.linkArrow}/>
            </a>
          </div>

          <p>
            Гортензии очень чутко реагируют на влажность. У них много цветочков
            из-за этого они быстро испаряют влагу, особенно в жару. Поэтому
            лучше их не перегревать в машине, а в цветочном попросить чтобы
            гортензии были в отдельном флакончике с водой.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flowers;
