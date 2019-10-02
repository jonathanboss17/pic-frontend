import React from 'react'; 
import { Image, Header, Grid, List, Card, Icon, Menu } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom'; 

export default class Profile extends React.Component {
    state = {
        current_user: null, 
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
            this.setState({current_user: data})
        })
    }

    render() {
        const { activeItem } = this.state.activeItem
        return (
            <Grid textAlign='left'>
                <br/>  
                <br/>
                <br/>
                <Menu secondary>
                    <Link to='/feed' exact='true'>
                        <Menu.Item name='Feed' active={activeItem === 'Feed'} onClick={this.handleItemClick} />
                    </Link>
                </Menu>
                <List horizontal>
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
                    <Image src='https://i.imgur.com/yz6pzGK.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Maine</Card.Header>
                        <Card.Meta>wtrimble99</Card.Meta>
                        <Card.Description>
                            <a>
                                <Icon name='like' />
                                76 Likes
                            </a>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='comment' />
                                5 comments
                            </a>
                        </Card.Content>
                </Card>

                <Card>
                    <Image src='https://i.imgur.com/WOFaR8v.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Caption</Card.Header>
                        <Card.Meta>Username</Card.Meta>
                        <Card.Description>
                            <a>
                                <Icon name='like' />
                                # Likes
                            </a>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='comment' />
                                 # comments
                            </a>
                        </Card.Content>
                </Card>

                <Card>
                    <Image src='https://i.imgur.com/Q7mZ77z.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>crazy mtn lakes</Card.Header>
                        <Card.Meta>ltrevelino36</Card.Meta>
                        <Card.Description>
                            <a>
                                <Icon name='like' />
                                100 Likes
                            </a>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='comment' />
                                3 comments
                            </a>
                        </Card.Content>
                </Card>

                <Card>
                    <Image src='https://i.imgur.com/TjI858b.jpg' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>backpacking</Card.Header>
                        <Card.Meta>jboss17</Card.Meta>
                        <Card.Description>
                            <a>
                                <Icon name='like' />
                                243 Likes
                            </a>
                        </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='comment' />
                                6 comments
                            </a>
                        </Card.Content>
                </Card>

            </Card.Group>
            </Grid>
            
            
            )
    }
}