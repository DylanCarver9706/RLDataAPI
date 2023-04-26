import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearchTerm }) => {

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
                    <Link to="/RLDataAPI/" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        All Items
                    </Link>
                    <Link to="/RLDataAPI/wheels" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Wheels
                    </Link>
                    <Link to="/RLDataAPI/goal_explosions" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Goal Explosions
                    </Link>
                    <Link to="/RLDataAPI/boosts" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Boosts
                    </Link>
                    <Link to="/RLDataAPI/bodies" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Bodies
                    </Link>
                    <Link to="/RLDataAPI/decals" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Decals
                    </Link>
                    <Link to="/RLDataAPI/antennas" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Antennas
                    </Link>
                    <Link to="/RLDataAPI/toppers" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Toppers
                    </Link>
                    <Link to="/RLDataAPI/trails" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Trails
                    </Link>
                    <Link to="/RLDataAPI/playeranthems" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Player Anthems
                    </Link>
                    <Link to="/RLDataAPI/paint_finishes" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Paint Finishes
                    </Link>
                    <Link to="/RLDataAPI/avatar_borders" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Avatar Borders
                    </Link>
                    <Link to="/RLDataAPI/avatars" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Avatars
                    </Link>
                    <Link to="/RLDataAPI/banners" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Banners
                    </Link>
                    <Link to="/RLDataAPI/crates" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Crates
                    </Link>
                    <Link to="/RLDataAPI/engine_sounds" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Engine Sounds
                    </Link>
                    <Link to="/RLDataAPI/stickers" style={{ fontSize: 18, color: 'inherit', textDecoration: 'none' }}>
                        Stickers
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
                        placeholder="Search All Items by Name"
                        style={{ color: '#ffffff' }}
                        onChange={handleSearch}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;