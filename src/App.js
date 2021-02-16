import './App.scss';
import Row from './components/Row';
import { trending } from './data';

function App() {
	return (
		<div className="App">
			<Row title="Meovies" url={ trending } />
		</div>
	);
}

export default App;
