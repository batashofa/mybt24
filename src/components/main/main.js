import React from "react";
import {Link} from "react-router-dom";
import {Box, Container, Fab} from "@material-ui/core";

export default class Main extends React.Component {

    render() {
        return (
            <Container>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <Link to="/form">
                        <Fab variant="extended">Form</Fab>
                    </Link>
                </Box>
            </Container>
        );
    }
}
