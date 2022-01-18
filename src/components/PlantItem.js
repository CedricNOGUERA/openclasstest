import CareScale from './CareScale';

function PlantItem({ id, name, cover, price, description, light, water }) {

    function handleClick(e) {
    
        alert(`Vous voulez acheter 1 ${e} ? Très bon choix 🌱✨`)
        console.log('✨ Ceci est mon event :', e)
    }
    // const covered = cover === stringify(cover);
    return (
        <div key={id} className="col">
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

                <a href="#" onClick={() => handleClick(name)} className="btn btn-outline-success">Je la veux</a>
            </div>
        </div>
        </div>
    )
}

export default PlantItem;