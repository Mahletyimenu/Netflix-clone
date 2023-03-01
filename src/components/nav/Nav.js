import React,{useState,useEffect} from 'react';
import './Nav.css';
const Nav = () => {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if( window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        // return()=>{
        //  window.removeEventListener("scroll");
        // };
    },[]);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
            className='nav_logo'
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd51263-bb0f-4465-af86-f7ed25e58e70/df6xk9d-3bac3151-c02b-4501-bc3a-e8e07ed7e5b2.png/v1/fill/w_1280,h_390,strp/netflix_logo_by_amazingtoludada3000_df6xk9d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzkwIiwicGF0aCI6IlwvZlwvZWNkNTEyNjMtYmIwZi00NDY1LWFmODYtZjdlZDI1ZTU4ZTcwXC9kZjZ4azlkLTNiYWMzMTUxLWMwMmItNDUwMS1iYzNhLWU4ZTA3ZWQ3ZTViMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.b9-3yDtVSELMO-LtkGCxGuM6kFSEY13bekSGyY1yI54'
            alt='Netflix Logo'
            />
            <img
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            alt='Avatar logo'
            />
            
        </div>
        
    );
}

export default Nav;
