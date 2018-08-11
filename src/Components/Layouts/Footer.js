import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, category, onSelect }) => {
	const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
	const onIndexSelect = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1]);
	return (
		<Paper>
			<Tabs
				indicatorColor='primary'
				textColor='primary'
				centered
				value={index}
				onChange={onIndexSelect}>
				<Tab label="All" />
				{muscles.map(group => <Tab key={group.index} label={group} />)}
			</Tabs>
		</Paper>);
};

export default Footer;
