import { Link, useNavigate} from "react-router-dom"
import Logo from "../../assets/logo.png"
import Cover from "../../assets/fundo.png"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

export function Signup() {

    const navigate = useNavigate()

    function handleSignup(){
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
                    Por favor cadastre-se
                </h2>

                <form className="flex flex-col items-center justify-center mt-6 space-y-4">
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" type="email"/>
                    <Input placeholder="Senha" type="password" />
                    <Input placeholder="Confirmar Senha" type="password" />
                    <Button text="Cadastrar" onClick={handleSignup} />
                </form>

                <span className="mt-auto mb-1">Já possui uma conta?
                    <Link to="/" className="text-blue-500 mx-2 mt-48 mb-5" >Entre</Link>
                </span>
            </div>
            
                <img src={Cover} alt="capa" className="h-full object-cover object-center"/>
                </div>
        </div>
    )
}