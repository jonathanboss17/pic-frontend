import React from 'react'; 
import { Card, Image, Icon, Grid, Header, Menu   } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom'; 

export default class Feed extends React.Component {
    state = {
        current_user: null, 
        activeItem: 'Profile'
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/feed', {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': localStorage.getItem('jwt')
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({current_user: data})
        })
    }

    

    render() {
        const { activeItem } = this.state
        return (
        
            <Grid textAlign='center'> 
            <br/>
            <Menu secondary>
                <Link to='/profile' exact='true'>
                    <Menu.Item name='Profile' active={activeItem === 'home'} onClick={this.handleItemClick} />
                </Link>
            </Menu>
            <Header as='h2'>Trashtagram</Header>
            <Card.Group itemsPerRow={3}>
                <Card>
                    <Image src='null' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Maine</Card.Header>
                        <Card.Meta>wtrimble99</Card.Meta>
                        <Card.Description>
                            <div>
                                <Icon name='like' />
                                76 Likes
                            </div>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <div>
                                <Icon name='comment' />
                                5 comments
                            </div>
                        </Card.Content>
                </Card>

            </Card.Group>
            </Grid>
        )
    }
}