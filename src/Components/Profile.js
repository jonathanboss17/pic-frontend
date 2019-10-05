import React from 'react'; 
import { Image, Header, Grid, List, Card, Icon, Menu, Container, Segment} from 'semantic-ui-react'; 
import { Link } from 'react-router-dom'; 

export default class Profile extends React.Component {
    state = {
        user: '', 
        activeItem: 'Feed'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/profile', {
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': localStorage.getItem('jwt')
            }
        })
        .then(response => response.json())
        .then(data => {
           this.setState({user: data})
        })
    }

    render() {
        const { activeItem } = this.state.activeItem
        return (
            <Grid container columns={1}>
                <Grid.Column>
                    <Menu secondary>
                        <Link to='/feed' exact='true'>
                            <Menu.Item name='Feed' active={activeItem === 'Feed'} onClick={this.handleItemClick} />
                        </Link>
                    </Menu>
               </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <List horizontal size='big'>
                            <List.Item>
                                <Image src={this.state.user.avatar} size='medium' rounded />
                            </List.Item>
                            <List.Item>
                                {this.state.user.bio}
                            </List.Item>
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        Your Images
                    </Segment>
                </Grid.Column>
            </Grid>
            )
    }
}



    
                {/* <List horizontal>
                    <List.Item><Header as='h1'>Profile</Header></List.Item>
                    <br/> 
                    <List.Item>
                        <Image src='https://i.imgur.com/TjI858b.jpg' size='medium' circular />  
                    </List.Item>
                    <List.Item>Username</List.Item>
                    <List.Item>Bio</List.Item>
                    <List.Item>Followers:</List.Item>
                    <List.Item>Following:</List.Item>
                </List>
                
                <br />
                <Card.Group itemsPerRow={3}>
                <Card>
                    <Image src='https://i.imgur.com/WOFaR8v.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Caption</Card.Header>
                        <Card.Meta>Username</Card.Meta>
                        <Card.Description>
                            <div>
                                <Icon name='like' />
                                # Likes
                            </div>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <div>
                                <Icon name='comment' />
                                 # comments
                            </div>
                        </Card.Content>
                </Card>



            </Card.Group>  */}