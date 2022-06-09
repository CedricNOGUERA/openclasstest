import Banner from "../components/Banner";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import logo from '../assets/logo_90.png';
import Recommendation from '../components/Recommendation';
import SlideBar from "../components/SlideBar";
import Footer from "../components/Footer";
import { useState } from "react";

function App() {
	const [cart, updateCart] = useState([])

	const title = "La Galerie OLLIER";
	return (
		<>
			<Banner>
				<img src={logo} alt='La galerie OLLIER' className='lmj-logo' />
				<h1>{title}</h1>
				<Recommendation />

			</Banner>


			<SlideBar />
			<div className="container">
				<div className="row">
					<Cart cart={cart} updateCart={updateCart} />
					<ShoppingList cart={cart} updateCart={updateCart}>
					</ShoppingList>
				</div>
			</div>
			<Footer />


		</>
	);
}

export default App;
