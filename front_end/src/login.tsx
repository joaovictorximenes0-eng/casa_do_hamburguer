import Input from "./components/Input.tsx";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col items-center justify-center gap-2 rounded-md">
        <img src="./logo.png" alt="" className="mb-4" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
