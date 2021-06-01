import React from "react";
import {Box, Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default class FormBuild extends React.Component {

    getValueInput() {
        const inputArray = [];
        for (let i = 1; i > 0 && i <= this.props.arrayFormValues[0]; i++) {
            inputArray.push(
                <Box
                    display="flex"

                    mt={2}
                    ml={4}
                >
                    <TextField
                        id="outlined-textarea"
                        placeholder="Input"
                        multiline
                        variant="outlined"
                    />
                </Box>
            )
        }
        return inputArray;
    }

    getValueTextarea() {
        const textareaArray = [];
        for (let i = 1; i > 0 && i <= this.props.arrayFormValues[1]; i++) {
            textareaArray.push(
                <Box
                    display="flex"

                    mt={2}
                    ml={8}
                >
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Textarea"
                        variant="outlined"
                    />
                </Box>
            )
        }
        return textareaArray;
    }


    getValueCheckbox() {
        const checkboxArray = [];
        for (let i = 1; i > 0 && i <= this.props.arrayFormValues[2]; i++) {
            checkboxArray.push(
                <Box
                    display="flex"

                    mt={2}
                    ml={10}
                >
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} name="checkedH"/>}
                        label="Checkbox"
                    />
                </Box>
            )
        }
        return checkboxArray;
    }

    render() {
        console.log(this.props)
        return (

            <Box
                width="45%"
                display="flex"
                justifyContent="space-around"
            >
                <Box> {this.getValueInput()}</Box>
                <Box>{this.getValueTextarea()}</Box>
                <Box> {this.getValueCheckbox()}</Box>

            </Box>
        )
    }
};
