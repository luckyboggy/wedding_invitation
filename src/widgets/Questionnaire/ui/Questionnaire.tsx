import { FC, useState, ChangeEvent, useEffect } from "react";
import cls from "./Questionnaire.module.scss";
import Input from "src/shared/ui/Input/Input";
import Checkbox from "src/shared/ui/Checkbox/Checkbox";
import Modal from "src/shared/ui/Modal/Modal";
import AcceptData from "src/shared/ui/AcceptData/AcceptData";

type TAlcoholItem = {
  id: number;
  label: string;
  value: string;
};

const alcoholOptions: TAlcoholItem[] = [
  { id: 1, label: "Пиво", value: "beer" },
  { id: 2, label: "Вино белое", value: "white wine" },
  { id: 3, label: "Вино красное", value: "red wine" },
  { id: 4, label: "Мартини", value: "martini" },
  { id: 5, label: "Коньяк", value: "cognac" },
  { id: 6, label: "Водка", value: "vodka" },
  { id: 7, label: "Виски", value: "whiskey" },
  { id: 8, label: "Не пью", value: "none" },
];

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSf9EovzzWxsiJDx7nZ9p_5tpvvbhz5-Z6bOBzZSvN3nLdSqAg/formResponse";

type FormState = {
  firstName: string;
  secondName: string;
  isConfirm: boolean;
  transport: "withCar" | "needTransfer" | null;
  alcohol: number[];
  customAlcohol: string;
  favSong: string;
};

const initialForm: FormState = {
  firstName: "",
  secondName: "",
  isConfirm: false,
  transport: null,
  alcohol: [],
  customAlcohol: "",
  favSong: "",
};

const Questionnaire: FC = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleTransportChange = (option: "withCar" | "needTransfer") => {
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

  const validate = () => {
    const newErrors = {} as Record<keyof FormState, string>;

    if (!form.firstName.trim()) newErrors.firstName = "Введите имя";
    if (!form.secondName.trim()) newErrors.secondName = "Введите фамилию";
    if (!form.isConfirm) newErrors.isConfirm = "Нужно подтвердить участие";
    if (!form.favSong.trim()) newErrors.favSong = "Введите любимую песню";

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setHasSubmitError(true);
      return;
    }

    setErrors({});
    setHasSubmitError(false);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("entry.873173624", form.firstName);
    formData.append("entry.1180697503", form.secondName);
    formData.append("entry.535601811", form.isConfirm ? "да" : "нет");

    if (form.transport === "withCar") {
      formData.append("entry.621548593", "Своя машина");
    } else if (form.transport === "needTransfer") {
      formData.append("entry.621548593", "Нужен трансфер");
    }

    form.alcohol.forEach((id) => {
      const label = alcoholOptions.find((item) => item.id === id)?.label;
      if (label) formData.append("entry.162603456", label);
    });

    if (form.customAlcohol.trim()) {
      formData.append("entry.378707317", form.customAlcohol);
    }

    formData.append("entry.982372463", form.favSong);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setIsSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      alert("Ошибка при отправке. Попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const allValid =
      form.firstName.trim() &&
      form.secondName.trim() &&
      form.favSong.trim() &&
      form.isConfirm;

    if (allValid) {
      setHasSubmitError(false);
    }
  }, [form]);

  return (
    <div className={cls.questionnaire}>
      <div className={cls.wrapper}>
        {isSubmitted && (
          <Modal onClose={() => setIsSubmitted(false)}>
            <AcceptData />
          </Modal>
        )}

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
              error={errors.firstName}
            />
            <Input
              label="Фамилия"
              name="secondName"
              value={form.secondName}
              onChange={handleChange}
              error={errors.secondName}
            />
          </div>

          <Checkbox
            label="Подтверждаю участие"
            name="isConfirm"
            checked={form.isConfirm}
            onChange={handleChange}
            error={errors.isConfirm}
            withError={true}
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
            <Input
              label={
                <>
                  Любимая песня
                  <br />
                  (никому не рассказывай)
                </>
              }
              name="favSong"
              value={form.favSong}
              onChange={handleChange}
              error={errors.favSong}
            />
          </fieldset>

          <div className={cls.btn}>
            <button type="button" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить"}
            </button>
            <div className={cls.submitError}>
              {hasSubmitError && "Заполните все поля"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
