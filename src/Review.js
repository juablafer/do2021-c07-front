import React from 'react';

function Review(props) {
    return (
        <tr>
            <td>{props.review.id}</td>
            <td>{props.review.animal}</td>
            <td>{props.review.name}</td>
            <td>{props.review.hasChip.toString()}</td>
            <td>{props.review.chipNumber}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.review)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.review)}>Delete</button></td>
        </tr>
    );
}

export default Review;