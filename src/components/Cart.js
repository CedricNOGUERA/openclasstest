import { useState } from "react";



//state



// Comportement



//rendu
function Cart({ cart, updateCart }) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(false)


	return isOpen ? (
		<div className="card col-sm-12 col-lg-3" style={{ height: '50%' }} >
			<div className="card-body">
				<h2> Panier </h2>
				<button className="btn btn-outline-success" onClick={() => setIsOpen(false)}>Fermer le panier</button>
				<ul className="list-group">
					<li className="list-group-item">Monsetra : {monsteraPrice} € {' '}
						{/* <button onClick={() => updateCart(cart + 1)}>Ajouter</button>{' '} */}
						<button className="btn btn-outline-success" onClick={() => updateCart(0)}>Réinitialisé</button></li>
					<li className="list-group-item">Olivier : { } €</li>
					<li className="list-group-item">
						Bouquet de fleur : { } €
					</li>
					<li className="list-group-item">{/* <Description /> */}</li>
				</ul>

				<br />
				<div> Total Panier: {cart * monsteraPrice} €</div>

			</div>
		</div >

		// <div className="offcanvas offcanvas-start text-light bg-secondary" data-bs-scroll="false" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
		// 	<div className="offcanvas-header text-info">
		// 		<h2 className="offcanvas-title justify-content-start" id="offcanvasScrollingLabel">
		// 			<img className="pe-2" src="https://img.icons8.com/ultraviolet/50/000000/shopping-cart-loaded--v1.png" /> Panier</h2>

		// 		<button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		// 	</div>
		// 	<div className="offcanvas-body">
		// 		<ul className="list-group">
		// 			<li className="list-group-item">Monsetra : {monsteraPrice} €</li>
		// 			<li className="list-group-item">Olivier : { } €</li>
		// 			<li className="list-group-item">
		// 				Bouquet de fleur : { } €
		// 			</li>
		// 			<li className="list-group-item">{/* <Description /> */}</li>
		// 		</ul>
		// 		<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
		// 		<button onClick={() => updateCart(0)}>Réinitialisé</button>
		// 		<br />
		// 		<div> Total : {cart * monsteraPrice} €</div>
		// 	</div>
		// </div>

	) : (
		<button className="col-1" onClick={() => setIsOpen(true)}>Ouvrir votre panier</button>
	)
}

export default Cart;

