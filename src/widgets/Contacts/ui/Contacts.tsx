import { FC } from "react";
import cls from "./Contacts.module.scss";

const Contacts: FC = () => {
  return (
    <div className={cls.contacts}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <p>Контакты</p>
        </div>
        <div className={cls.content}>
          <p>
            По всем вопросам вы можете обратиться а нашему организатору
            Александре
          </p>
          <p className={cls.number}>+7 996 230 6905</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
