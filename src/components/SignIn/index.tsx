import { ChangeEvent, useState } from "react";
import ProgressBar from "../ProgressBar";
import "./styles.css"

export default function SignIn() {
  const [user, setUser] = useState<Record<string, any>>({
    name: '',
    age: 0,
    email: '',
  });

  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    const properties = { name: 33.33, age: 33.33, email: 33.33 } as Record<string, number>;
    let progress = 0;

    for (const property in properties) {
      if (user[property] && user[property].length > 0) {
        progress += properties[property];
      }
    }
    setProgress(progress);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
    handleProgress();
  }

  return (
    <form className="form__with-progress">
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" id="name" onChange={handleChange} />

      <label htmlFor="age">Idade</label>
      <input type="number" name="age" id="age" onChange={handleChange} />

      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" onChange={handleChange} />

      <ProgressBar fill={progress} />
    </form>
  );
}
