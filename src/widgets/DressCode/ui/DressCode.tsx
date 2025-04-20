import { FC, useState } from "react";
import Carousel from "src/shared/ui/Carousel/Carousel";
import ArrowIcon from "shared/assets/images/svg/arrow.svg?react";

import cls from "./DressCode.module.scss";

const DressCode: FC = () => {
  const [show, setShow] = useState(false);
  const [switchItem, setSwitchItem] = useState(1);
  const [animating, setAnimating] = useState(false);

  const showToggle = () => {
    setShow((prev) => !prev);
  };

  const handleSwitch = (item: number) => {
    if (item === switchItem || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setSwitchItem(item);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className={cls.dressCode}>
      <div className={cls.wrapper}>
        <div className={cls.title} onClick={showToggle}>
          <p>Дресс-код</p>
          <ArrowIcon className={`${cls.arrow} ${show ? cls.rotate : ""}`} />
        </div>
        <div className={`${cls.content} ${show ? cls.open : ""}`}>
          <div className={cls.description}>
            <p>Общий вайб — Тосканская свадьба</p>
            <p>
              Летний вечер в Италии. Вы с бокалом игристого на берегу
              Лигурийского моря, наслаждаетесь прохладой после жаркого дня.
              Впереди — два дня отдыха и удовольствий. Лёгкий бриз играет с
              волосами… И Вы думаете, что надеть в этот вечер. Вот несколько
              идей:
            </p>
          </div>
          <div className={cls.references}>
            <Carousel />
          </div>
          <div className={cls.moreDetails}>
            <div className={cls.switcher}>
              <div
                className={`${cls.switchItem} ${
                  switchItem === 1 ? cls.active : ""
                }`}
                onClick={() => handleSwitch(1)}
              >
                <p>для дам</p>
              </div>
              <div
                className={`${cls.switchItem} ${
                  switchItem === 2 ? cls.active : ""
                }`}
                onClick={() => handleSwitch(2)}
              >
                <p>для мужчин</p>
              </div>
            </div>
            <div
              className={`${cls.switchContent} ${
                animating ? cls.fadeOut : cls.fadeIn
              }`}
              key={switchItem} // поможет React сбросить содержимое
            >
              {switchItem === 1 ? (
                <div className={cls.wCase}>
                  <p>
                    Лёгкий летний образ из приятной развевающейся ткани. <br />
                    Может быть кружева и воланы? Может быть любимый цветочный
                    принт? <br />
                    Может быть длинное, а может короткое? Всё зависит от
                    настроения.
                  </p>
                  <div className={cls.sum}>
                    <p>Основные пожелания:</p>
                    <ul>
                      <li>
                        <span>Образ: костюм или платье</span>
                      </li>
                      <li>
                        <span>Длина: любая</span>
                      </li>
                      <li>
                        <span>Цвет: не белое, не черное</span>
                      </li>
                      <li>
                        <span>
                          Единообразный верх и низ: не тёмный низ и светлый верх
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={cls.mCase}>
                  <p>
                    Расслабленный летний образ. Возможно льняные штаны и цветная
                    рубашка. Можно принт на рубашке. <br />
                    Шорты не стоит. Можно костюм тёмный, если он у вас есть и он
                    вам нравится.
                  </p>
                  <div className={cls.sum}>
                    <p>Основные пожелания:</p>
                    <ul>
                      <li>
                        <span>
                          Образ (лёгкий летний костюм или штаны + рубашка)
                        </span>
                      </li>
                      <li>
                        <span>Длина: не шорты</span>
                      </li>
                      <li>
                        <span>Цвет: лёгкие летние оттенки</span>
                      </li>
                      <li>
                        <span>Возможно разный верх и низ</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
