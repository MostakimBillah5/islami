


.menue-down ul li {
    float: left;
    text-align:center;
}

.menue-down li a {
    text-decoration: none;
    padding: 17px 40px;
    display: block;
    color: white;
    font-family: monospace;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.5px;
    width: 80px;
}

.menue-down li a:first-child {
    padding-left: 0;
}

.menue-down li a:after {content: '';
    background: #fff;
    height: 2px;
    width: 0%;
    position: absolute;
    margin-left: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2px;
    transform: skewX(45deg);
    transition: 0.5s;
}

.menue-down li:hover a:after {
    width: 6%;
}