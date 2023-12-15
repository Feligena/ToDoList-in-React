import 'bootstrap/dist/css/bootstrap.css';
import FooterFilling from './footerFilling';

const MyFooter = () =>{
    // const arrWords = ['СПАСИБО','ЗА','ВНИМАНИЕ!'];
    return (<footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
                <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                    <FooterFilling/>
                    {/*<div class="row">
                         {arrWords.map((word, index)=>(
                            <div class="col-4 col-lg-2 mb-3">
                                <h5 key={index}>{word}</h5>
                            </div>
                        ))} 
                    </div>*/}
                </div>
            </footer>);
};

export default MyFooter;
