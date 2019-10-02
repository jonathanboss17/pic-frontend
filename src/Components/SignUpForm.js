import React from 'react'; 
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'; 
import { Link, Redirect } from 'react-router-dom'; 

export default class SignUpForm extends React.Component {
    
    state = {
        username: '', 
        password: '', 
        bio: '', 
        avatar: '', 
        redirect: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = event => {
          event.preventDefault(); 
    
          const reqObj = {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                user: {
                  username: this.state.username, 
                  password: this.state.password, 
                  bio: this.state.bio, 
                  avatar: this.state.avatar
                }
              })
          }
    
          fetch('http://localhost:3000/api/v1/users', reqObj)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("jwt", data.jwt)
          })
          this.setState({redirect: true})
      }

      renderRedirect = () => {
          if(this.state.redirect && localStorage.jwt !== 'undefined'){
            return <Redirect to='/profile' />
          }
          this.setState({redirect: false})
      }



    render() {
        return (
            <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 600 }}>
                    {this.renderRedirect}
                    <Header as='h2' color='blue' textAlign='center'>Create Account</Header>
                    <Segment>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Username' placeholder='jboss17' name="username" value={this.state.username} onChange={this.handleChange}/>
                                <Form.Input fluid label='Password' placeholder='hg3Rtqx' name="password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Input fluid label='Profile Image' placeholder='http://myavatarimage.com' name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
    
                            <Form.TextArea label='Bio' placeholder='Tell us more about you...' name="bio" value={this.state.bio} onChange={this.handleChange}/>
                            
                            <Button color='blue'>Sign Up</Button>
                        </Form>

                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

}