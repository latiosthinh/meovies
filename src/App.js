import './App.css';
import Row from './components/Row';
import { trending } from './data';

function App() {
	return (
		<div className="App">
			<Row title="Trending" url={ trending } />
		</div>
	);
}

export default App;
