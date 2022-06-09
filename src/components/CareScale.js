import sun from '../assets/sun.svg';
import water from '../assets/water.svg';


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const suny = <img src={sun} className="" alt="ensoleillement" />
    const wet = <img src={water} className="" alt="arrosage" />
    const scaleType = careType === 'light' ? suny : wet
    

    const msg = {
        1: 'de peu ',
        2: 'moyen ',
        3: 'de beaucoup '
    }
    const sunyCons = msg[scaleValue] === 'moyen ' ? 'd\'un ensoleillement '+ msg[scaleValue] : msg[scaleValue] + 'd\'ensoleillement'
    const wetCons = msg[scaleValue] === 'moyen ' ? 'd\'un arrosage '+ msg[scaleValue] : msg[scaleValue] + 'd\'arrosage'
    
    const consType = careType === 'light' ? sunyCons : wetCons

    function handleClick(e) {
    
        alert( `Cette plante a besoin ${e} 🌱✨`)
        console.log('✨ Ceci est mon event :', e)
    }


    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleClick(consType)} >{scaleType}{''}</span> : null
            )}
        </div>
    )
}

export default CareScale