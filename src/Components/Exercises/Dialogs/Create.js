import React, { Component, Fragment } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
    }

    handleSubmit = () => {
        //to do validation
        const { exercise } = this.state;
        this.props.onCreate(
            {
                ...exercise,
                id: exercise.title.toLowerCase().replace(/ /g, '-')
            }
        );
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }



    render() {
        const { open, exercise: { title, description, muscles } } = this.state,
            { classes, muscles: categories } = this.props;
        return < Fragment >
            <Button variant="fab" mini onClick={this.handleToggle}>
                <AddIcon />
            </Button>
            <Dialog
                open={open}
                onClose={this.handleToggle}>
                <DialogTitle>create an exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        please fill out the form below
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            className={classes.FormControl}
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <br />
                        <FormControl className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">Muscles</InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange('muscles')}
                            >
                                {categories.map(category =>
                                    <MenuItem value={category}>{category}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            multiline
                            rows="4"
                            label="Description"
                            value={description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                            className={classes.FormControl}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        variant="raised"
                        onClick={this.handleSubmit}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    }
})