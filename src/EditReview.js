import React from 'react';

function EditReview(props) {

    const handleChange = event => {
        props.onChange({ ...props.review, [event.target.name]: event.target.value })
    }

    return (
        <tr>
            <td><input className="form-control" name="id" value={props.review.id} onChange={handleChange}></input></td>
            <td><input className="form-control" name="animal" value={props.review.animal} onChange={handleChange}></input></td>
            <td><input className="form-control" name="name" value={props.review.name} onChange={handleChange}></input></td>
            <td><input className="form-control" name="hasChip" value={props.review.hasChip.toString()} onChange={handleChange}></input></td>
            <td><input className="form-control" name="chipNumber" value={props.review.chipNumber} onChange={handleChange}></input></td>
            <td><button className="btn btn-primary" onClick={() => props.onSave(props.review)}>Save</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onCancel(props.review)}>Cancel</button></td>
        </tr>
    );
}

export default EditReview;