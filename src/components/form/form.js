import React from "react";
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import {Box, Button} from "@material-ui/core";
import FormBuild from "../form-build/form-build";


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formInput: 0,
            formTextarea: 0,
            formCheckbox: 0,
            arrayFormValues: []

        };
    }

    getInputValue(e) {
        this.setState({[e.target.id]: e.target.value})
    }

    sentToFormBuild() {
        this.setState({arrayFormValues: [this.state.formInput, this.state.formTextarea, this.state.formCheckbox]})
    }

    render() {
        console.log(this.state)
        return (
            <form>
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
                        <TextField onChange={(e) => this.getInputValue(e)}
                                   id="formInput" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box>
                        <Box
                            pl={9}
                            pb={2}
                        >
                            {"Textarea"}</Box>
                        <TextField onChange={(e) => this.getInputValue(e)}
                                   id="formTextarea" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box>
                        <Box
                            pl={9}
                            pb={2}
                        >
                            {"Checkbox"}</Box>
                        <TextField onChange={(e) => this.getInputValue(e)}
                                   id="formCheckbox" label="Введите число" type="number" variant="outlined"/>
                    </Box>
                    <Box
                        mt={7}
                    >
                        <Button onClick={() => this.sentToFormBuild()} variant="outlined">Build</Button>
                    </Box>
                </Box>

                <FormBuild
                    arrayFormValues={this.state.arrayFormValues}
                />
            </form>
        );
    }
}
