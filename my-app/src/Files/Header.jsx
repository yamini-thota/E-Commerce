import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src="https://lms.achieversit.com/assets/images/logo.png" alt="logo" />
                    <div class="navbar justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item" aria-current="page">
                                <a class="nav-link active" href="#">Shop</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active"><i class="fa-solid fa-cart-shopping"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active"><i class="fa-solid fa-user"></i></a>
                            </li>
                            <form class="d-flex" role="search">
                                <input class="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;