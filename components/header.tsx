import nlwUniteIcon from '../src/assets/nlw-unite-icon.svg'

export function Header() {
    return (
        <div>
            <img src={nlwUniteIcon}/>
            <nav>
                <a href=''>Eventos</a>
                <a href=''>Participantes</a>
            </nav>

        </div>
    )
}