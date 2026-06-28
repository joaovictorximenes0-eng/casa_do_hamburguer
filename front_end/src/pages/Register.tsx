import { useState } from "react";
import Input from "../components/Input.tsx";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCEP, setCEP] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(confirmCEP);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2 rounded-md">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCEP(e.target.value)}
        />

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white">
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
