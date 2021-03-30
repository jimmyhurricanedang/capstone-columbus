import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`


.locate {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    z-index: 10;
}

.search {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    z-index: 10;
}

.search input {
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
}