import { useState } from "react";



function Footer() {
    
    const [inputValue, setInputValue] = useState('Inscrivez votre email');

    function checkValue(value){
        if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(value)){
            
            console.log(inputValue);
            // alert("Email au bon format : "+ value);
        }else{alert("Email au mauvais format : "+ value) }
    }

    return (
        <footer className="footer mt-auto py-3 bg-light border border-top">
            <div className="container">
                <div className="row">

                    <span className="text-muted col-4">
                        <div className="input-group mb-3">
                            <input type="email"
                                message="Email non valide" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onBlur={(e) => checkValue(e.target.value)}
                                 
                                className="form-control" 
                                placeholder="email" 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2" 
                            />
                            <button 
                                onClick={() => checkValue(inputValue)} 
                                className="btn btn-outline-success" type="button" id="button-addon2"
                            >
                                {(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(inputValue)) ? <img src="https://img.icons8.com/doodle/24/000000/checkmark.png"/> :
                                <img src="https://img.icons8.com/color/24/000000/arrow--v2.png"/>}
                            </button>
                        </div>
                    </span>
                    <p className="col-8 text-end"><a href="#">Back to top</a></p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;