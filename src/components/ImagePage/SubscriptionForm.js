import React from "react";
import {
	SubscriptionFormContainer,
	Form,
	ImageCardP,
	LogoImg,
} from "./ImagePageElements";

const SubscriptionForm = ({ onSubmit }) => {
	return (
		<SubscriptionFormContainer>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					const email = e.target.email.value;
					onSubmit(email);
				}}
			>
				<h2>Subscribe to Proceed</h2>
				<ImageCardP>
					Sign up with your email to get your masterpiece. Your support fuels
					the artist's passion, and yes, it's absolutely free!
				</ImageCardP>
				<input type="email" name="email" placeholder="Your Email" required />
				<button type="submit">Subscribe</button>
			</Form>
		</SubscriptionFormContainer>
	);
};

export default SubscriptionForm;
