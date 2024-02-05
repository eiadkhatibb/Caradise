import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  chatButton: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    borderRadius: '50%',
    padding: '20px',
    border: '0px'
  },
  chatPopup: {
    display: "none",
    position: "fixed",
    bottom: "0",
    right: "15px",
    border: "3px solid #f1f1f1",
    zIndex: 9
  },
  formContainer: {
    maxWidth: "300px",
    padding: "10px",
    backgroundColor: "white"
  },
  textArea: {
    width: "100%",
    padding: "15px",
    margin: "5px 0 22px 0",
    border: "none",
    background: "#f1f1f1",
    resize: "none",
    minHeight: "200px"
  },
  textAreaFocus: {
    backgroundColor: "#ddd",
    outline: "none"
  },
  formContainerButton: {
    backgroundColor: "#04AA6D",
    color: "white",
    padding: "16px 20px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    marginBottom: "10px",
    opacity: 0.8
  },
  formContainerCancel: {
    backgroundColor: "red",
  },
  openButtonHover: {
    opacity: 1,
  },
}))
