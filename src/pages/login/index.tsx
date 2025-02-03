import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.png"
import Cover from "../../assets/fundo.png"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Login() {

    const navigate = useNavigate()

    function handleSignIn() {
        navigate("/home")
    }


    return (
        <div className="">
            <div className="h-screen grid grid-cols-1 sm:grid-cols-2 w-full">
            <div className="flex flex-col items-center justify-center">
                <img
                    src={Logo}
                    alt="agendei"
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
                    <Input placeholder="Senha" type="password" />
                    <Button text="Acessar" onClick={handleSignIn} />
                </form>

                <span className="mt-auto mb-1">Não tem uma conta?
                    <Link to="/signup" className="text-blue-500 mx-2 mt-48 mb-5" >Criar conta agora</Link>
                </span>
            </div>
            
                <img src={Cover} alt="capa" className="h-full object-cover object-center"/>
                </div>
        </div>
    )
}