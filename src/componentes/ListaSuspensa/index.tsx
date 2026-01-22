import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    itens: string[]
    valor: string
    aoAlterado: (event: string) => void
    required?: boolean
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa