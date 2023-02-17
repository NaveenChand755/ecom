/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React, {useState} from 'react';

const Menu = ({handleOnChange, reset}) => {
    const [showingSearch, setShowingSearch] = useState(false)

    
    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    const showSearchContainer =(e) => {
        e.preventDefault();
     
            setShowingSearch(!showingSearch)
        
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    const onSearch = (e) =>{
       handleOnChange(e)

    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text"onChange={(e) => onSearch(e)} />
                    <a href="#" onClick={(e) => showSearchContainer(e)}>
                        <i className="material-icons close" onClick={reset}>close</i>
                    </a>
                </div>
            </header>
        );

}

// Export out the React Component
export default Menu;