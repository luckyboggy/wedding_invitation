import { FC, useState } from "react";
import cls from "./Start.module.scss";

//
import mainImage from "shared/assets/images/main_01.jpg";

const Start: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={cls.start}>
      <img src={mainImage} alt="Main image" onLoad={() => setLoading(false)} />

      {!loading && (
        <>
          <div className={cls.title}>Wedding day</div>
          <div className={cls.date}>18.06.2025</div>
        </>
      )}
    </div>
  );
};

export default Start;
