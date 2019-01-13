import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../_redux/actions/fetchDataAction';
import { compose } from 'redux';

class ListItem extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    render() {
        console.log(this.props);
        return <div>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>  
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = {
    _data: fetchData
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(ListItem);