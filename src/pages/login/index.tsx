import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import Cover from "../../assets/fundo.png"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Login() {
    return (
        <div className="h-screen flex">
            <div className="w-[50%] flex flex-col items-center justify-center">
                <img
                    src={Logo}
                    alt="agendei"
                    width={165}
                    height={37.95}
                    className="mt-16"
                />
                <p className="text-center font-bold text-2xl leading-8 mt-11">
                    Gerencie seus agendamentos de forma descomplicada
                </p>
                <h2 className="text-2xl mt-32">
                    Acessar sua conta
                </h2>

                <form className="flex flex-col items-center justify-center mt-6 space-y-4">
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" />
                    <Button text="Acessar" />
                </form>

                <span className="mt-auto mb-1">Não tenho conta
                    <Link to="/signup" className="text-blue-500 mx-2" >Criar conta agora</Link>
                </span>
            </div>
            <div className="w-[50%] h-full">
                <img src={Cover} alt="capa" className="object-fill" />
            </div>
        </div>
    )
}