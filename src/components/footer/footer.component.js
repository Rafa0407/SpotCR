import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import * as color from '@material-ui/core/colors';

import './footer.styles.css';

export default class FooterComponent extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <div>
        <Paper elevation={4} >
          <div class="row">
            <div class="col-xs-12 col-sm-offset-2 col-sm-3">
              <p>SpotCR</p>
            </div>
            <div class="col-xs-12 col-sm-3">
              <p>Facebook</p>
            </div>
            <div class="col-xs-12 col-sm-3">
              <p>Contactanos!</p>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = {
	bottomNavigation: {
		backgroundColor: color.grey[900],
	},
	item: {
		padding: 20,
		alignContent: 'center',
		color: color.grey200,
	}
}