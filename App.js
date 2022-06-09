import Banner from "../components/Banner";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
// import logo from '../assets/logo_90.png';
// import Recommendation from '../components/Recommendation';
// import SlideBar from "../components/SlideBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { plantList } from "../datas/plantList";

function App() {
	const savedCart = localStorage.getItem('cart')

	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	const [isOpen, setIsOpen] = useState(false)
	const [isCat, setIsCat] = useState(plantList)
	const [activeCategory, setActiveCategory] = useState('')
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<>
			<Banner cart={cart} isCat={isCat} setIsCat={setIsCat} isOpen={isOpen} setIsOpen={setIsOpen} activeCategory={activeCategory} setActiveCategory={setActiveCategory}>

				{/* <img src={logo} alt='La galerie OLLIER' className='lmj-logo' />
				<h1>{title}</h1>
				<Recommendation /> */}

			</Banner>


			{/* <SlideBar /> */}
			<div className="container-fluid p-4">
				<div className="row">
					{/* <div className="col-12"> */}
					<Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
					<ShoppingList cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} isCat={isCat} setIsCat={setIsCat} activeCategory={activeCategory} setActiveCategory={setActiveCategory} >
					</ShoppingList>
					{/* </div> */}
				</div>
			</div>
			<Footer />


		</>
	);
}

export default App;
