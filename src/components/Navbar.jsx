import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // const [textSearch, setTextSearch] = useState("");
  // const handleSearch = (e) => {
  //   console.log(e.target.value);
  //   setTextSearch(e.target.value);
  // };
  // const searchItem=(e)=>{
  //   textSearch.title===e.target.value.title;

  // }
  // const searchInNews = (e) => {
  //   e.preventDefault();
  //   console.log("searching");
  // for (i = 0; i < li.length; i++) {
  //   a = li[i].getElementsByTagName("a")[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  //}
  // if(articles[0].title === textSearch)  { then give some border to NewsItem
  //   console.log(articles[0].title);}
  // };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark  border border-dark position-fixed top-0 left-0"
        style={{ width: "100%", zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Channel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                  <Link className="nav-link " to="/">
                    About
                  </Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                // onChange={handleSearch}
                className="form-control me-2"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button
                // onClick={searchInNews}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
