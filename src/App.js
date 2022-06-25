import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header></Header>
      <Contact kontak={contacts[0]}/>
      <Contact kontak={contacts[1]}/>
      <Contact kontak={contacts[2]}/>
      <Contact kontak={contacts[3]}/>
      <Contact kontak={contacts[4]}/>
      <Contact kontak={contacts[5]}/>
      <Contact kontak={contacts[6]}/>

    </div>
  );
}

export default App;
