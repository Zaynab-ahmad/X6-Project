import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import ring from '../../assets/Icons/Ring.svg';
import search from '../../assets/Icons/search.svg';
import logo from '../../assets/Imgs/Logo.png';
import { Link } from 'react-router-dom';
import bars from '../../assets/Icons/bars.svg';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('Home');
    const [isDropdownOpen, setIsdDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDropdown = () => {
        setIsdDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest('.barsBtn')) {
            setIsdDropdownOpen(false);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', closeDropdown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`kr-navbar xContainer ${scrolled ? 'scrolled' : ''}`}>
            <Link className="logoContainer" to={'/'} onClick={() => setActiveLink('Home')}>
                <img className="kr-logo" src={logo} alt="logo" />
            </Link>
            <Nav className="kr-navigation-container" variant="pills" defaultActiveKey="/home">
                <Nav.Item className="kr-navitem">
                    <Nav.Link
                        as={Link}
                        to={'/'}
                        onClick={() => setActiveLink('Home')}
                        className={activeLink === 'Home' ? 'active-link' : 'notactive-link'}
                        href="/"
                    >
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ textDecoration: 'none' }} as={Link} to={'/movies-and-shows'} className="kr-navitem">
                    <Nav.Link
                        onClick={() => setActiveLink('link-1')}
                        className={activeLink === 'link-1' ? 'active-link' : 'notactive-link'}
                        eventKey="link-1"
                        href="/movies-and-shows"
                    >
                        Movies & Shows
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ textDecoration: 'none' }} as={Link} to={'/support'} className="kr-navitem">
                    <Nav.Link
                        onClick={() => setActiveLink('link-2')}
                        className={activeLink === 'link-2' ? 'active-link' : 'notactive-link'}
                        eventKey="link-2"
                        href="/X6-Project/support"
                    >
                        Support
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ textDecoration: 'none' }} as={Link} to={'/subscription'} className="kr-navitem">
                    <Nav.Link
                        onClick={() => setActiveLink('link-3')}
                        className={activeLink === 'link-3' ? 'active-link' : 'notactive-link'}
                        eventKey="link-3"
                        href="/X6-Project/Subscriptions"
                    >
                        Subscriptions
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="kr-icons-container">
                <img src={search} alt="search" />
                <img src={ring} alt="ring" />
            </div>
            <button className={isDropdownOpen ? 'barsBtn open' : 'barsBtn'} onClick={toggleDropdown}>
                <img src={bars} alt="bars" />
            </button>
            {isDropdownOpen && (
                <div className="dropdownmenu">
                    <Link className="dropdownitem" to={'/'} onClick={() => setActiveLink('Home')}>
                        Home
                    </Link>
                    <Link className="dropdownitem" to={'/movies-and-shows'} onClick={() => setActiveLink('link-1')}>
                        Movies & Shows
                    </Link>
                    <Link className="dropdownitem" to={'/support'} onClick={() => setActiveLink('link-2')}>
                        Support
                    </Link>
                    <Link className="dropdownitem" to={'/subscriptions'} onClick={() => setActiveLink('link-3')}>
                        Subscriptions
                    </Link>
                </div>
            )}
        </div>
    );
}
