import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function Mission(props) {
    return (
    <Grid centered columns={2}>
        <Grid.Column>
          {
            <>
              <Header as='h1' textAlign='center'> <br />
              One of the biggest problems in America is how slow it is for social change to occur.  
              This is especially true with polarizing issues, where it becomes extremely difficult to 
              change one’s perspective. <br />
                <Header.Subheader> <br />
                Corvus aims to fix this problem by challenging people’s beliefs through nontraditional means. 
                Through our discussion and game process of encouraging open-mindedness, we hope to challenge our 
                users’ beliefs and allow them to understand the other point of view on some of the country’s most 
                divisive issues.
                </Header.Subheader>
              </Header>
            </>
          }
        </Grid.Column>
      </Grid>
    );
}