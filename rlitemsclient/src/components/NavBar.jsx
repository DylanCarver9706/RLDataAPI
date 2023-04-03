import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearchTerm }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    const list = (
        <List>
            <ListItem button onClick={toggleDrawer(false)}>
                <Link to="/RLDataAPI/wheels" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <ListItemText primary="Wheels" />
                </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
                <Link to="/RLDataAPI/goal_explosions" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <ListItemText primary="Goal Explosions" />
                </Link>
            </ListItem>
            {/* Add more menu items for other item types here */}
        </List>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    <Link to="/RLDataAPI/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        All Items
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
                <SwipeableDrawer
                    anchor={'left'}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
