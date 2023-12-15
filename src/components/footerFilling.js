import {arrWords} from './Variables';

const FooterFilling = () =>{
    return(
        <div className="row">
            {arrWords.map((word, index)=>(
                <div className="col-4 col-lg-2 mb-3">
                    <h5 key={index}>{word}</h5>
                </div>
            ))}
        </div>
        
    );
};

export default FooterFilling;