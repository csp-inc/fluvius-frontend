import React from "react";
import {Paper, Typography, Box} from '@material-ui/core'

const MapTitle = (props) => {
    return (
        <>
        <Box display="flex" flexDirection="row" justifyContent="center" m={2}>
        <Paper>
            <Typography variant="h6" style={{padding: "10px", paddingLeft: "15px", paddingRight: "15px"}}>
                {props.title}
            </Typography>
        </Paper>
        </Box>
        </>
    )
}

export default MapTitle;