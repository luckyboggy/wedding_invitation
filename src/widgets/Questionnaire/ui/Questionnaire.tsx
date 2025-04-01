import { FC, useState } from "react";
import cls from "./Questionnaire.module.scss";

const Questionnaire: FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    isConfirm: false,
    withCar: false,
    alcohol: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAlcoholChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      alcohol: checked
        ? [...prev.alcohol, value]
        : prev.alcohol.filter((item) => item !== value),
    }));
  };

  return (
    <div className={cls.questionnaire}>
      <div className={cls.wrapper}>
        <div className={cls.title}>
          <p>Анкета гостя</p>
        </div>
        <div className={cls.form}>
          <label>
            Имя:
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Фамилия:
            <input
              type="text"
              name="secondName"
              value={form.secondName}
              onChange={handleChange}
            />
          </label>
          <label className={cls.checkboxLabel}>
            <input
              type="checkbox"
              name="isConfirm"
              checked={form.isConfirm}
              onChange={handleChange}
            />
            Подтверждаю участие
          </label>
          <label className={cls.checkboxLabel}>
            <input
              type="checkbox"
              name="withCar"
              checked={form.withCar}
              onChange={handleChange}
            />
            Буду на машине
          </label>
          <fieldset>
            <legend>Предпочтения в алкоголе:</legend>
            <label>
              <input
                type="checkbox"
                value="wine"
                checked={form.alcohol.includes("wine")}
                onChange={handleAlcoholChange}
              />
              Вино
            </label>
            <label>
              <input
                type="checkbox"
                value="vodka"
                checked={form.alcohol.includes("vodka")}
                onChange={handleAlcoholChange}
              />
              Водка
            </label>
            <label>
              <input
                type="checkbox"
                value="whiskey"
                checked={form.alcohol.includes("whiskey")}
                onChange={handleAlcoholChange}
              />
              Виски
            </label>
            <label>
              <input
                type="checkbox"
                value="none"
                checked={form.alcohol.includes("none")}
                onChange={handleAlcoholChange}
              />
              Не пью
            </label>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
