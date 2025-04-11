import { FC, useState } from "react";
import cls from "./Questionnaire.module.scss";
import Input from "src/shared/ui/Input/Input";
import Checkbox from "src/shared/ui/Checkbox/Checkbox";

type TAlcoholItem = {
  id: number;
  label: string;
  value: string;
};

const alcoholOptions: TAlcoholItem[] = [
  { id: 1, label: "Пиво", value: "beer" },
  { id: 2, label: "Вино белое", value: "white wine" },
  { id: 3, label: "Вино красное", value: "red wine" },
  { id: 4, label: "Мртини", value: "martini" },
  { id: 5, label: "Коньяк", value: "cognac" },
  { id: 6, label: "Водка", value: "vodka" },
  { id: 7, label: "Виски", value: "whiskey" },
  { id: 8, label: "Не пью", value: "none" },
];

const Questionnaire: FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    isConfirm: false,
    transport: null as "withCar" | "needTransfer" | null, // Изменено на null или строку
    alcohol: [] as number[],
    customAlcohol: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTransportChange = (option: "withCar" | "needTransfer" | null) => {
    setForm((prev) => ({
      ...prev,
      transport: prev.transport === option ? null : option,
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
    setIsSubmitted(true);
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
            <div className={cls.personData}>
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
            </div>
            <Checkbox
              label="Подтверждаю участие"
              name="isConfirm"
              checked={form.isConfirm}
              onChange={handleChange}
            />
            <div className={cls.transport}>
              <legend>Транспорт</legend>
              <Checkbox
                label="Своя машина"
                name="withCar"
                checked={form.transport === "withCar"}
                onChange={() => handleTransportChange("withCar")}
              />
              <Checkbox
                label="Нужен трансфер"
                name="needTransfer"
                checked={form.transport === "needTransfer"}
                onChange={() => handleTransportChange("needTransfer")}
              />
            </div>
            <fieldset>
              <legend>Предпочтения в алкоголе:</legend>
              <div className={cls.alcoholList}>
                {alcoholOptions.map(({ id, label, value }) => (
                  <div className={cls.alcoholItem} key={id}>
                    <Checkbox
                      label={label}
                      name={value}
                      checked={form.alcohol.includes(id)}
                      onChange={() => handleAlcoholChange(id)}
                    />
                  </div>
                ))}
              </div>
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
