import React from "react";
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import {Box, Button} from "@material-ui/core";
import FormBuild from "../form-build/form-build";


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {},
        };
    }

    formData(e) {
        const formData = new FormData(e.target);
        e.preventDefault();
        let object = {};
        for (let pair of formData.entries()) {
            object = {...object, [pair[0]]: pair[1]}
        }
        this.setState({formValues: {...object}});
    }

    render() {
        return (
            <form onSubmit={(e) => this.formData(e)}>
                <Box
                    fontWeight={500}
                    fontStyle="Roboto"
                    width="60%"
                    mt={3}
                    display="flex"
                    justifyContent="space-around"
                >
                    <Box>
                        <Box
                            pl={10}
                            pb={2}
                        >
                            {"Input"}</Box>
                        <TextField name="formInput"
                                   id="formInput" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box>
                        <Box
                            pl={9}
                            pb={2}
                        >
                            {"Textarea"}</Box>
                        <TextField name="formTextarea"
                                   id="formTextarea" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box>
                        <Box
                            pl={9}
                            pb={2}
                        >
                            {"Checkbox"}</Box>
                        <TextField name="formCheckbox"
                                   id="formCheckbox" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box
                        mt={7}
                    >
                        <Button type="submit" variant="outlined">Build</Button>
                    </Box>
                </Box>

                <FormBuild
                    formValues={this.state.formValues}
                />
            </form>
        );
    }
}
