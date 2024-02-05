import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    margin: '30px 0',
    display: 'flex',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 15px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  searchButton: {
    display: 'flex',
    alignItems: 'right',
    flex: '1',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
