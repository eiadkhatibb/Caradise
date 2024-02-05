import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (type.trim() || search.trim() || tags) {
      dispatch(getPostsBySearch({ type, search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${type && search && 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };
  // const SearchRental = () => {
  //   if (search.trim() || tags) {
  //     const specificTag = 'rental';
  //     const lowercaseTag = specificTag ? specificTag.toLowerCase() : '';
  //     const tagsParam = lowercaseTag ? `&tags=${lowercaseTag}` : '';
  //     dispatch(getPostsBySearch({ search, tags: lowercaseTag }));
  //     history.push(`/posts/search?searchQuery=${search || 'none'}${tagsParam}`);
  //   } else {
  //     history.push('/');
  //   }
  // };

  // const SearchService = () => {
  //   if (search.trim() || tags) {
  //     const specificTag = 'service';
  //     const lowercaseTag = specificTag ? specificTag.toLowerCase() : '';
  //     const tagsParam = lowercaseTag ? `&tags=${lowercaseTag}` : '';
  //     dispatch(getPostsBySearch({ search, tags: lowercaseTag }));
  //     history.push(`/posts/search?searchQuery=${search || 'none'}${tagsParam}`);
  //   } else {
  //     history.push('/');
  //   }
  // };


  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth='xl'>
      <AppBar className={classes.appBarSearch} position="static" color="inherit">
        <TextField
          onKeyDown={handleKeyPress}
          name="type"
          variant="outlined"
          label="Search Type"
          fullWidth
          style={{ margin: '10px 10px', height: '50px'}}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          onKeyDown={handleKeyPress}
          name="search"
          variant="outlined"
          label="Search Name"
          fullWidth
          style={{ margin: '10px 10px', height: '50px'}}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ChipInput
          style={{ margin: '10px 10px', height: '50px'}}
          value={tags}
          fullWidth
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip) => handleDeleteChip(chip)}
          label="Search Tags"
          variant="outlined"
        />
        <div className={classes.searchButton}>
          <Button onClick={searchPost} variant="contained" color="secondary" size='large' style={{ height: '50px' }}>Search</Button>

          {/* <Button onClick={SearchRental} className={classes.searchButton} variant="contained" color="primary" style={{ backgroundColor: '#c41c1a' }} >Rentals</Button>
              <Button onClick={SearchService} className={classes.searchButton} variant="contained" color="primary" style={{ backgroundColor: '#c41c1a' }} >services</Button> */}
        </div>

        </AppBar>

        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
