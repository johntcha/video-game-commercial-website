import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
			<p className='footer-subscription-heading'>
				Join the adventure now
			</p>
			<p className="footer-subscription-text">
				Get the Beta version and get 5 free skins !
			</p>
			<div className="input-areas">
				<div className="but_footer">
					<Button 
					buttonLink='/login'
					buttonStyle='btn--outline'>Subscribe</Button>
				</div>
					
				<a
				className="contactus"
				href="https://docs.google.com/forms/d/1zOui1ikoEwQvya2ZTwQsE4G0MWylPt2hzeuQemoXxJ4/edit"
				target="_blank">
				Contact us</a>
				
			</div>
			</section>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="social-logo">
						<Link to="/" className="social-logo">
							TOWER DEFENSE
						</Link>
					</div>
					<small className="website-rights">TOWER DEFENSE © 2020</small>
					<div className="social-icons">
						<Link className="social-icon-link facebook"
						to="/"
						target='_blank'
						aria-label='Facebook'
						>
						<i className= 'fab fa-facebook-f' />	
						</Link>
						<Link className="social-icon-link instagram"
						to="/"
						target='_blank'
						aria-label='Instagram'
						>
						<i className= 'fab fa-instagram' />	
						</Link>
						<Link className="social-icon-link youtube"
						to="/"
						target='_blank'
						aria-label='Youtube'
						>
						<i className= 'fab fa-youtube' />	
						</Link>
						<Link className="social-icon-link twitter"
						to="/"
						target='_blank'
						aria-label='Twitter'
						>
						<i className= 'fab fa-twitter' />	
						</Link>
					</div>
				</div>
			</section>
		</div>
		)
}

export default Footer;