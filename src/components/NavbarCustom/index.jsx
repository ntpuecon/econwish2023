import './index.css'

export function NavbarCustom({children}) {
    return (
        <div className="navbar">
            {children}
        </div>

    )
}
export function NavbarItem({children}) {
    return (
        <div className="navbar-item">
            {children}
        </div>

    )
}
