import { Link } from 'react-router-dom'
export default function Navbar() {
    
    const respToggle = () => {
        const toggle = document.querySelector('.toggle-btn');
        const toggleIcon = document.querySelector('.toggle-btn i');
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('open')
        const isOpen = dropdown.classList.contains('open')

        toggleIcon.classList = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    }
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <a href='#'>Amir Portfolio</a>
                </div>
                <ul className='nav-links'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contacts'}>Contact</Link></li>
                </ul>
                <a href='#' class='action-btn'>Contact Me</a>
                <div className="toggle-btn" onClick={respToggle}>
                    <i class="bi bi-list"></i>
                    {/* <i class="bi bi-x-lg"></i> */}
                </div>
            </div>
            <div className="dropdown">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contacts'}>Contact</Link></li>
                <li><a href='#' class='action-btn'>Contact Me</a></li>
            </div>
        </header>
    )
}