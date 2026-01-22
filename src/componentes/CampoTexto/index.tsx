import './CampoTexto.css'

interface CampoTextoProps {
    label: string
    type?: InputType
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
    required?: boolean
}

type InputType = 'text' | 'date' | 'number' | 'email' | 'password'

const CampoTexto = ({label, placeholder, valor, aoAlterado, required: obrigatorio=false, type="text"}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} type={type}/>
        </div>
    )
}

export default CampoTexto