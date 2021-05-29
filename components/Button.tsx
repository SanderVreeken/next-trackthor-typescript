import CSS from 'csstype'
import ButtonI from '../interfaces/Button'

interface Props {
    button: ButtonI
    style?: CSS.Properties
}

export default function Button({ button: { icon, title }, style}: Props) {
    return (
        <button style={style}>
            {icon}
            <p>{title}</p>
        </button>
    )
}