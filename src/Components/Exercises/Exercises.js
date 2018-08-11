import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import RightPane from './RightPane';
import LeftPane from './LeftPane';

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		overflowY: 'auto'
	}
};

const Exercises = ({ exercises }) => (
	<Grid container>
		<Grid item xs>
			<Paper styles={styles.Paper}>
				{exercises.map(([group, exercises]) =>
					<Fragment key={exercises.index}>
						<Typography variant='headline' style={{ textTransform: 'capitalize' }}>
							{group}
						</Typography>
						<List component="ul">
							{exercises.map(({ title }) =>
								<ListItem button key={title.index}>
									<ListItemText primary={title} />
								</ListItem>)}
						</List>
					</Fragment>
				)}
			</Paper>
		</Grid>
		<Grid item xs>
			<Paper styles={styles.Paper}>
				<Typography variant="display1">
					Welcome!
				</Typography>
				<Typography variant="subheading" style={{ marginTop: 20 }}>
					Select exercise
				</Typography>
			</Paper>
		</Grid>
	</Grid>
);

export default Exercises;