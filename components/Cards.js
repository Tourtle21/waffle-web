import React from 'react';
import Header from "../styles/Header";
import Link from 'next/link'

const Cards = () => {

    return (
				<ul id="cards">
					<li className="card" id="card_1">
						<div>
							<div className="hero">
								<div className="blue-back">
									<Header className="start">Our Mission</Header>
									<div className="text">
										<p className="cards-text" id="handofra">We want to help entrepreneurs build their dream business's and help support and expand their capacity. Our goal is to make your website and business succeed. We succeed when you do.</p>
									</div>
									<div id="hidden-text">
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="card flipped" id="card_2">
						<div className="card__content blue">
							<div>
								<h2 className="bold">Design and Development</h2>
								<p>If you are looking for a brand new website design or if you are just looking to update your current website design to a new/modern look then we can help. Our skilled team can either build a site to match your unique brand or help you create a new captivating brand to match your business.</p>
							</div>
							<Link href='/design'><div className="learnMore">Learn More</div></Link>
						</div>
					</li>
					<li className="card flipped" id="card_3">
						<div className="card__content red">
							<div>
								<h2 className="bold">Digital Marketing</h2>
								<p>We're your all-in-one digital marketing team - Everything you need. We'll start on a custom-made digital marketing program created by our team of professionals focused on getting you specific measurable results and help you to achieve your personal marketing goals.</p>
								{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
							</div>
							<Link href='/marketing'><div className="learnMore">Learn More</div></Link>
						</div>
					</li>
					<li className="card flipped" id="card_4">
						<div className="card__content yellow">
							<div>
								<h2 className ="bold">SEO</h2>
								<p>Let’s face it. You know what you need but you just don’t know how to get it. Our SEO specialists can help you with any of your SEO needs, if your website isn’t being found online, if your website traffic has diminished recently and you don’t know why, if suddenly, your volume of incoming calls and leads has declined, or even if you’re starting a new website and want to ramp up new business as quickly as possible. Contact us about your specific SEO needs and we'll get you started.

</p>
							</div>
							<Link href='/seo'><div className="learnMore">Learn More</div></Link>
						</div>
					</li>
					<li className="card flipped" id="card_5">
						<div className="card__content green">
							<div>
								<h2 className ="bold">Branding</h2>
								<p>We create bold business brands that demand attention and equip our clients to conquer their market. If you need help building a brand online, we can help you establish yourself in any industry. We'll first, help you build and expand your image online. Then, thanks to the success of our marketing and outreach campaigns, we can continue to help expand and grow your brand in the digital space. </p>
							</div>
							<Link href='/branding'><div className="learnMore">Learn More</div></Link>
						</div>
					</li>
				</ul>
    )
};

export default Cards;