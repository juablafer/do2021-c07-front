import React from 'react';

class NewReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            animal: '',
            name: '',
            hasChip: '',
            chipNumber: ''
        }

        this.changeReview = this.changeReview.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeReview(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    clickAdd() {
        this.props.onAddReview(this.state);
        this.setState({
            id: '',
            animal: '',
            name: '',
            hasChip: '',
            chipNumber: ''
        });
    }

    render() {
        return (
            <tr>
                <td><input className="form-control" name="id" value={this.state.id} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="animal" value={this.state.animal} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="name" value={this.state.name} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="hasChip" value={this.state.hasChip} onChange={this.changeReview}></input></td>
                <td><input className="form-control" name="chipNumber" value={this.state.chipNumber} onChange={this.changeReview}></input></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Pet</button></td>
            </tr>
        );
    }
}

export default NewReview;