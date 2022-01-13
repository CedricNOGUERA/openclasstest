import "../styles/Banner.css";
import logo from '../assets/logo_90.png'

function Banner() {
	const title = "La Galerie OLLIER";
	return (
		
		<div className="lmj-banner mb-2">
			 <img src={logo} alt='La galerie OLLIER' className='lmj-logo' />
			<h1>{title}</h1>
		</div>
	);
}

export default Banner;
