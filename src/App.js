import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';

function App() {
  return (
    <PDFViewer style={{
      width: window.innerWidth,
     height: window.innerHeight,
    }}>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
