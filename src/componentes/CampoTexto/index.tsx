import './CampoTexto.css'

interface CampoTextoProps {
    label: string
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
    required?: boolean
}

const CampoTexto = ({label, placeholder, valor, aoAlterado, required: obrigatorio=false}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto