import React from 'react';
import Review from './Review.js';
import Alert from './Alert.js';
import NewReview from './NewReview.js';
import EditReview from './EditReview.js';
import ReviewsApi from './ReviewsApi.js';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorInfo: null,
            reviews: [],
            isEditing: {}
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addReview = this.addReview.bind(this);
        this.loadReviews = this.loadReviews.bind(this);
    }

    async loadReviews() {
        try {
            let result = await ReviewsApi.getAllReviews();
            this.setState({
                reviews: result
            });
        } catch (error) {
            this.setState({
                errorInfo: "There was a problem with the connection to the server"
            });
        }
    }

    async componentDidMount() {
        await this.loadReviews();
    }

    handleEdit(review) {
        this.setState(prevState => ({
            isEditing: { ...prevState.isEditing, [review.id]: review }
        }));
    }

    async handleDelete(review) {
        try {
            await ReviewsApi.deleteReview(review.id);
        } catch (error) {
            this.setState({
                errorInfo: "There was an error deleting pet"
            });
        }

        await this.loadReviews();
    }

    handleCancel(id, review) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[id];

            return {
                isEditing: isEditing
            }
        });
    }

    handleChange(id, review) {
        this.setState(prevState => ({
            isEditing: { ...prevState.isEditing, [id]: review }
        }));
    }

    async handleSave(id, review) {
        console.log(review)

        if (String(review.hasChip) !== 'true' && String(review.hasChip) !== 'false') {
            this.setState({
                errorInfo: "Has chip must be either 'true' or 'false'"
            });
            return false;
        }

        if (review.id === '') {
            this.setState({
                errorInfo: "Id cannot be empty"
            });
            return false;
        }

        if (isNaN(review.chipNumber)) {
            this.setState({
                errorInfo: "Chip number must be a number"
            });
            return false;
        }

        try {
            var formattedReview = {
                id: review.id,
                animal: review.animal,
                name: review.name,
                hasChip: String(review.hasChip) === 'true',
                chipNumber: Number(review.chipNumber)
            }
            await ReviewsApi.putReview(id, formattedReview);
            this.setState(prevState => {
                const isEditing = Object.assign({}, prevState.isEditing);
                delete isEditing[id];
                return {
                    isEditing: isEditing
                }
            });
        } catch (error) {
            this.setState({
                errorInfo: "There was an error updating pet"
            });
        }

        await this.loadReviews();
    }

    handleCloseError() {
        this.setState({
            errorInfo: null
        });
    }

    async addReview(review) {

        if (review.id === '') {
            this.setState({
                errorInfo: "Id cannot be empty"
            });
            return false;
        }
        
        if (review.hasChip !== 'true' && review.hasChip !== 'false') {
            this.setState({
                errorInfo: "Has chip must be either 'true' or 'false'"
            });
            return false;
        }

        if (isNaN(review.chipNumber)) {
            this.setState({
                errorInfo: "Chip number must be a number"
            });
            return false;
        }
        try {
            var formattedReview = {
                id: review.id,
                animal: review.animal,
                name: review.name,
                hasChip: Boolean(review.hasChip),
                chipNumber: Number(review.chipNumber)
            }
            await ReviewsApi.postReview(formattedReview)
        } catch (error) {
            this.setState({
                errorInfo: "There was an error adding pet"
            });
        }

        await this.loadReviews();
    }

    render() {
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />

                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Animal</th>
                            <th>Name</th>
                            <th>Has Chip</th>
                            <th>Chip Number</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <NewReview onAddReview={this.addReview} />
                    {this.state.reviews.map((review) =>
                        !this.state.isEditing[review.id] ?
                            <Review key={review.id} review={review} onEdit={this.handleEdit}
                                onDelete={this.handleDelete} />
                            :
                            <EditReview key={review.id} review={this.state.isEditing[review.id]}
                                onCancel={this.handleCancel.bind(this, review.id)}
                                onChange={this.handleChange.bind(this, review.id)}
                                onSave={this.handleSave.bind(this, review.id)} />
                    )}
                </table>

            </div>
        );
    }
}

export default Reviews;