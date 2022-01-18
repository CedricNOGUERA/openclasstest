import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo_90.png';
import Recommendation from './Recommendation';
import PlantItem from "./PlantItem";
import SlideBar from "./SlideBar";
import QuestionForm from "./QuestionFrom";
import Footer from "./Footer";

function App() {

	const title = "La Galerie OLLIER";
	return (
		<>
			<Banner>
				<img src={logo} alt='La galerie OLLIER' className='lmj-logo' />
				<h1>{title}</h1>
				<Recommendation />
			</Banner>
			<ShoppingList>
				<SlideBar />
				<Cart />
				<PlantItem />
			</ShoppingList>
			<QuestionForm />
			<Footer />

		</>
	);
}

export default App;
