// src/components/prospects/prospect_record_container.js

import { connect } from 'react-redux';
import { recordProspect } from '../../actions/prospect_actions';
import ProspectRecord from './prospect_record';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        errors: state.errors.prospect
    };
};

const mapDispatchToProps = dispatch => {
    return {
        recordProspect: data => dispatch(recordProspect(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProspectRecord);