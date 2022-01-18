// Composant Card

function Cart() {
	var PxMonstera = 8,
	olivier = 10,
		PxBqtFleur = 15;

	return (
		// <div className="col col-sm-4 col-md-3">
			<div className="card">
				<div className="card-body">
					<h2> Panier </h2>
					<ul className="list-group">
						<li className="list-group-item">Monsetra : {PxMonstera} €</li>
						<li className="list-group-item">Olivier : {olivier} €</li>
						<li className="list-group-item">
							Bouquet de fleur : {PxBqtFleur} €
						</li>
						<li className="list-group-item">{/* <Description /> */}</li>
					</ul>
					<br />
					<div> Total : {PxMonstera + olivier + PxBqtFleur} €</div>
				</div>
			</div>
		// </div>
	);
}

export default Cart;
