import React, { Component } from 'react';

class AddPhoto extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const imageLink = event.target.elements.link.value;
		const description = event.target.elements.description.value;
		const post = {
			id: Number(new Date()),
			description: description,
			imageLink: imageLink
		};
		if (imageLink && description) {
			this.props.startAddingPost(post);
			this.props.history.push('/');
		}
	};

	render() {
		return (
			<div>
				<div className="form">
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="link" placeholder="Link" />
						<input type="text" name="description" placeholder="Descriptions" />
						<button>Post</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddPhoto;
