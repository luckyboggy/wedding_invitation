import { FC, useState } from "react";
import cls from "./Questionnaire.module.scss";
import Input from "src/shared/ui/Input/Input";
import Checkbox from "src/shared/ui/Checkbox/Checkbox";

type TAlcoholItem = {
  id: number;
  label: string;
  value: string;
};

const Questionnaire: FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    isConfirm: false,
    withCar: false,
    alcohol: [] as number[],
    customAlcohol: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отправки формы

  const alcoholOptions: TAlcoholItem[] = [
    { id: 1, label: "Пиво", value: "beer" },
    { id: 2, label: "Вино", value: "wine" },
    { id: 3, label: "Водка", value: "vodka" },
    { id: 4, label: "Виски", value: "whiskey" },
    { id: 5, label: "Не пью", value: "none" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAlcoholChange = (id: number) => {
    setForm((prev) => ({
      ...prev,
      alcohol: prev.alcohol.includes(id)
        ? prev.alcohol.filter((item) => item !== id)
        : [...prev.alcohol, id],
    }));
  };

  const handleSubmit = () => {
    console.log("Форма отправлена:", form);
    setIsSubmitted(true); // Меняем состояние на true, когда форма отправлена
  };

  return (
    <div className={cls.questionnaire}>
      <div className={cls.wrapper}>
        {isSubmitted ? (
          <div className={cls.thankYouMessage}>
            <p>Ваши данные приняты</p>
          </div>
        ) : (
          <div className={cls.form}>
            <div className={cls.title}>
              <p>Анкета гостя</p>
            </div>
            <Input
              label="Имя"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              label="Фамилия"
              name="secondName"
              value={form.secondName}
              onChange={handleChange}
            />
            <Checkbox
              label="Подтверждаю участие"
              name="isConfirm"
              checked={form.isConfirm}
              onChange={handleChange}
            />
            <Checkbox
              label="Буду на машине"
              name="withCar"
              checked={form.withCar}
              onChange={handleChange}
            />
            <fieldset>
              <legend>Предпочтения в алкоголе:</legend>
              {alcoholOptions.map(({ id, label, value }) => (
                <div className={cls.cb} key={id}>
                  <Checkbox
                    label={label}
                    name={value}
                    checked={form.alcohol.includes(id)}
                    onChange={() => handleAlcoholChange(id)}
                  />
                </div>
              ))}
              <Input
                label="Предложите свой вариант"
                name="customAlcohol"
                value={form.customAlcohol}
                onChange={handleChange}
              />
            </fieldset>
            <div className={cls.btn}>
              <button type="button" onClick={handleSubmit}>
                Отправить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
