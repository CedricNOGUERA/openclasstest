import { plantList } from '../datas/plantList'

import PlantItem from './PlantItem';







function ShoppingList({ cart, updateCart }) {
    return (
        <>


            <div className="container-fluid col-sm-12 col-lg-9 ">

                <h1>Nos plants</h1>
                <div className='col-12 d-flex justify-content-end py-1'>
                    {/* <button /*onClick={() => setCart(cart + 1)}>Ajouter</button> */}

                    <button className="btn btn-outline-success btn-sm border-2 fs-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">

                        <img src="https://img.icons8.com/ios-filled/36/000000/shopping-cart-loaded--v1.png" alt="panier" /> Panier
                    </button>
                </div>

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">

                    {plantList.map((plant, id, cover, name, water, light) => (

                        <div key={`${plant.name}-${plant.id}`} id={`${plant.name}-${plant.id}`} className="col">
                            <PlantItem id={plant.id} name={plant.name} cover={plant.cover} price={plant.price} description={plant.description} light={plant.light} water={plant.water} cart={cart} updateCart={updateCart} />
                            {/* <button /*style="position:relative;" onClick={() => updateCart(cart + 1)}>Ajouter</button> */}

                        </div>
                    ))}
                </div>

            </div>
        </>

    )
}

export default ShoppingList