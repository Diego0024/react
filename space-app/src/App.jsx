import './App.css';
import Button from './components/Button/button';
import Navbar from './components/Navbar/Navbar';
import Astros from './components/astros/astros';
function App() {
  const btnText = 'Login';
  const links = [
    { id: 1 ,name: 'Home', href: '/' },
    { id: 2 , name: 'About', href: '/about' },
    { id: 3 , name: 'Astros', href: '/astros' },
  ];
  return (
    <>
      <Navbar links={links} />
      {/* Corregido para usar 'name' en lugar de 'txt' */}
      <Button name={btnText} />
    </>
  );
}

export default App;



