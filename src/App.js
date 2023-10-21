import './App.css';
import { Container } from 'react-bootstrap';
import QuoteCard from './components/quote/QuoteCard';

function App() {
  return (
    <div className="App">
      <Container>
        <h2 className='title'>The daily quote</h2>
        <QuoteCard />
      </Container>
    </div>
  );
}

export default App;
