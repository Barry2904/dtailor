// const Searchbar = () =>{
//     return (
//         <h1>Hi</h1>
//     )
// }

// export default Searchbar;

import { FC } from "react";

const Searchbar: FC = () => {
    return (
        <div style={styles.searchContainer}>
            <input 
                type="text" 
                placeholder="Search..." 
                style={styles.searchInput} 
            />
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={styles.searchIcon}
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="16" y1="16" x2="20" y2="20" />
            </svg>
        </div>
    );
};

const styles = {
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid lightgrey',
        borderRadius: '25px',
        padding: '5px 10px',
        width: '300px',
        backgroundColor: 'white',
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        width: '100%',
        padding: '5px',
        borderRadius: '25px',
        fontSize: '16px',
    },
    searchIcon: {
        marginLeft: '8px',
        color: 'gray',
        width: '20px',
        height: '20px',
    }
};

export default Searchbar;