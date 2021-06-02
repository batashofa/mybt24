import React from "react";
import {Box} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default class FormBuild extends React.Component {

    getFormFieldsByName(name, mt, ml) {
        const array = [];
        for (let i = 1; i > 0 && i <= this.props.formValues[name]; i++) {
            array.push(
                <Box
                    display="flex"

                    mt={mt}
                    ml={ml}
                >
                    {name === "formInput" ?
                        <TextField
                            id="outlined-textarea"
                            placeholder="Input"
                            multiline
                            variant="outlined"
                        /> :
                        name === "formTextarea" ?
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="Textarea"
                                variant="outlined"
                            /> :
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} name="checkedH"/>}
                                label="Checkbox"
                            />
                    }
                </Box>
            )
        }
        return array;
    }

    render() {
        return (
            <Box
                width="45%"
                display="flex"
                justifyContent="space-around"
            >
                <Box> {this.getFormFieldsByName("formInput", 2, 4)}</Box>
                <Box>{this.getFormFieldsByName("formTextarea", 2, 8)}</Box>
                <Box> {this.getFormFieldsByName("formCheckbox", 2, 10)}</Box>

            </Box>
        )
    }
};
