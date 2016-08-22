import { connect } from 'react-redux';
import People from '../components/People';

const mapStateToProps = (state)=> ({
  people: state.people
});

const PeopleList = connect(mapStateToProps)(People);

export default PeopleList;
