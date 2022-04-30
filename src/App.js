
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthContextProvider value >
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
