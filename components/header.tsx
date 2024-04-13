import nlwUniteIcon from '../src/assets/nlw-unite-icon.svg'

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon} alt="NLW Unite Icon"/>
            <nav className="flex items-center gap-5">
                <a href="" className="font-medium text-sm">Eventos</a>
                <a href="" className="font-medium text-sm text-zinc-300">Participantes</a>
            </nav>
        </div>
    )
}