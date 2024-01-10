import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    const headerContent = {
        '/sample01': { title: 'React Parallax Effect01', description: 'Framer Motion : 기본 애니메이션' },
        '/sample02': { title: 'React Parallax Effect02', description: 'Framer Motion ' },
        '/sample03': { title: 'React Parallax Effect03', description: 'Framer Motion ' },
        '/sample04': { title: 'React Parallax Effect04', description: 'Framer Motion ' },
        '/sample05': { title: 'React Parallax Effect05', description: 'Framer Motion ' },
        '/sample06': { title: 'React Parallax Effect06', description: 'Framer Motion ' },
        '/sample07': { title: 'React Parallax Effect07', description: 'Framer Motion ' },
        '/sample08': { title: 'React Parallax Effect08', description: 'Framer Motion ' },
        '/sample09': { title: 'React Parallax Effect09', description: 'Framer Motion ' },
        '/sample10': { title: 'React Parallax Effect10', description: 'Framer Motion ' },
    };
    const currentContent = headerContent[location.pathname] || { title: '', description: '' };
    const isActive = (path) => {
        return location.pathname === path;
    }
    return (
        <header id="react__header">
            <h1>{currentContent.title}</h1>
            <p>{currentContent.description}</p>
            <ul>
                <li><Link to="sample01" className={isActive('/sample01') ? 'active' : ''}>1</Link></li>
                <li><Link to="sample02" className={isActive('/sample02') ? 'active' : ''}>2</Link></li>
                <li><Link to="sample03" className={isActive('/sample03') ? 'active' : ''}>3</Link></li>
                <li><Link to="sample04" className={isActive('/sample04') ? 'active' : ''}>4</Link></li>
                <li><Link to="sample05" className={isActive('/sample05') ? 'active' : ''}>5</Link></li>
                <li><Link to="sample06" className={isActive('/sample06') ? 'active' : ''}>6</Link></li>
                <li><Link to="sample07" className={isActive('/sample07') ? 'active' : ''}>7</Link></li>
                <li><Link to="sample08" className={isActive('/sample08') ? 'active' : ''}>8</Link></li>
                <li><Link to="sample09" className={isActive('/sample09') ? 'active' : ''}>9</Link></li>
                <li><Link to="sample10" className={isActive('/sample10') ? 'active' : ''}>10</Link></li>
            </ul>
        </header>
    )
}

export default Header