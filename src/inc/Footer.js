import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">DA-IICT, Near Indroda Circle, Gandhinagar <br/> 382007, Gujarat(india)</FooterLink>
			<FooterLink href="#">(+91)079-68261700</FooterLink>
			<FooterLink href="#">(+91)079-68261710</FooterLink>
			<FooterLink href="#">info[at]daiict[dot]ac[dot]in</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
