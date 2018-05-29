import React, { Component } from "react";

import { AppBars, FooterComponent } from '../components'

import Main from '../routes/routes.route';

import './home.styles.css';

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home'>
				<AppBars />
				<div>
					<div className="row">
						<div className="col-md-12">
							<div className="box">
								<Main />
							</div>
						</div>
					</div>
				</div>
				<FooterComponent />
			</div>
    )
  }
}
