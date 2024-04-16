import './App.css';

const client = import.meta.env.REACT_APP_CLIENT
// const secret = process.env.NODE_ENV === 'production' && process.env.REACT_APP_SECRET

function App() {
  return (
    <div className={`App App--${client}`}>
      <header className="App-header">
        <img src={`/logo-${client}.svg`} className="App-logo" alt="logo" />
        {/* <p>{secret ?? '••••••'}</p> */}
      </header>
    </div>
  );
}

export default App;
