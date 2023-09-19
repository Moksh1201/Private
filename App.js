import './App.css';
import
function App() {
  const [selectedOption, setSelectedOption] = useState('Question'); // Default to 'Question'

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Define description text based on the selected option
  const descriptionText = selectedOption === 'Question' ? 'Describe your problem' : 'Article text';

  return (
    <div>

      
    </div>
  );
}

export default App;
