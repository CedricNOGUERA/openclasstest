import CareScale from './CareScale';

function PlantItem({ id, name, cover, price, description, light, water, updateCart, cart }) {

    //Comportement
    function handleClick(e) {

        alert(`Vous voulez acheter 1 ${e} ? Très bon choix 🌱✨`)
        console.log('✨ Ceci est mon event :', e)
    }

    //Rendu
    return (

        <div className="card h-100">

            <img src={cover} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <hr />
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
                {/* {plant.isBestSale && <span>🔥</span>}{' '} */}
                <h3 className="text-info">{price} €</h3>
                {/* <button onClick={() => updateCart(cart + 1)}>Ajouter</button> */}

                {/* <a href="#" onClick={() => handleClick(name)} className="btn btn-outline-success">Je la veux</a> */}
                <a href="#" onClick={() => updateCart(cart + 1)} className="btn btn-outline-success">Je la veux</a>
            </div>
        </div>

    )
}

export default PlantItem;