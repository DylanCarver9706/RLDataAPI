import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearchTerm }) => {
    // const [open, setOpen] = useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                // onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    <Link to="/RLDataAPI/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        All Items
                    </Link>
                    <Link to="/RLDataAPI/wheels" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Wheels
                    </Link>
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: alpha('#ffffff', 0.15),
                        borderRadius: 4,
                        paddingLeft: 16,
                        paddingRight: 16,
                        marginRight: 2,
                    }}
                >
                    <SearchIcon style={{ color: '#ffffff', marginRight: 8 }} />
                    <InputBase
                        placeholder="Search by item name"
                        style={{ color: '#ffffff' }}
                        onChange={handleSearch}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
