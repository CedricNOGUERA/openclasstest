import logo from '../assets/logo.png';
import { plantList } from '../datas/plantList'

import PlantItem from './PlantItem';
import Cart from "./Cart";
import SlideBar from "./SlideBar";







function ShoppingList() {
    return (
        <div className="container">

            <SlideBar />
            <h1>Nos Toiles</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">

                <div className="col">

                    <Cart />
                </div>
                {plantList.map((plant, category, name, id) => (

                    <PlantItem id={plant.id} name={plant.name} cover={plant.cover} price={plant.price} description={plant.description} light={plant.light} water={plant.water} />

                ))}
            </div>

        </div>

    )
}

export default ShoppingList