import {arrLinks} from './Variables';

const MyNavbar = () =>{
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {arrLinks.map((item, index)=>(
            <li className="nav-item">
                <a className="nav-link" aria-current="page" key={index} href={item.link}>{item.name}</a>
            </li>
        ))}
        {/* <li class="nav-item">
          <a class="nav-link" aria-current="page" href={arrLinks.link}>{arrLinks.name}</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
        <button className="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default MyNavbar;