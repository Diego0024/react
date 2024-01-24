import React from 'react';
import '../Navbar/Navbar.css'; // Asegúrate de tener la ruta correcta a tu archivo CSS
import '../Button/button.css'; // Asegúrate de tener la ruta correcta a tu archivo CSS

const Navbar = ({ links }) => {
    return (
        <div className='nav-container'>
            <div className='navbar'>
                {links.map((link, index) => (
                    <button key={index} onClick={link.onClick}>
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
