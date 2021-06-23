import React from 'react';
import Header from "../Styles/Header";
import soccer from '../../Assets/soccer.jpg';
import audience from '../../Assets/audience.jpg';
import timeline from '../../Assets/timeline.jpg';

const Cards = () => {

    return (
        <div id='card-container'>
			<div id='main'>
				<ul id="cards">
					<li className="card" id="card_1">
						<div>
							<div className="hero">
								<div className="blue-back">
									<Header className="start">Schedule to meet with our team</Header>
									<div className="text">
										<p className="bold">We'll help create a custom plan to reach your...</p>
									</div>
									<div id="hidden-text">
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h2 className="bold">Goals</h2>
								<p>Meet the needs that your business has to reach its goals</p>
							</div>
							<figure>
								<img src={soccer} alt="description" />
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h2 className="bold">Audience</h2>
								<p>Reach your target audience through SEO and strategic content writing</p>
								{/* <p><a href="#top" className="btn btn--accent">Read more</a></p> */}
							</div>
							<figure>
								<img src={audience} alt="description" />
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div>
								<h2 className ="bold">and Timeline</h2>
								<p>We'll create a custom timeline to make sure you know when it will be done, and we'll know when you need it done.</p>
							</div>
							<figure>
								<img src={timeline} alt="description" />
							</figure>
						</div>
					</li>
				</ul>
			</div>
        </div>
    )
};

export default Cards;