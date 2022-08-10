import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Apps from './Apps'

function AppBox() {

  //list of apps running in the server
  const [applications] = useState([
    {
        name: "Plex",
        domain: 'http://koko:32400/web/index.html',
        containerName: "plex-server",
        image: "https://avatars.githubusercontent.com/u/324832?v=4&s=400"
    },
    {
        name: "uTorrent",
        domain: 'http://koko:8081/gui/web/index.html',
        containerName: "utorrent",
        image: "data:image/png;base64,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"
    },
    {
        name: "Nope",
        domain: '',
        containerName: "test",
        image: "data:image/png;base64,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"
    },
  ])

  return (
    <Grid container spacing={2} justifyContent="center" display="flex" sx={{ pt: 2 }}>
      {
        applications.length === 0 ? 
        (
          applications.map(app => (
            <Apps containerName={app.containerName} title={app.name} image={app.image}/>
          ))
        ) : 
        (
          <Grid item>
            <Alert variant="filled" severity="error">
              <AlertTitle>Error</AlertTitle>
              No apps declared - <strong>check the code</strong>
            </Alert>
          </Grid>
        )
      }
    </Grid>
  )
}

export default AppBox