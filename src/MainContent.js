import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody
} from 'reactstrap';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { JobList } from './JobList';

export class Content extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    componentDidMount() {
		this.listener = firebase.auth().onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				this.setState({
					user: firebaseUser
				})
			} else {
				this.setState({
					user: null
				})
			}
		})
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <React.Fragment>

                <h1 style={{ paddingLeft: '30px', paddingTop: '20px'}}>Applications At A Glance</h1>

               

                <CardGroup>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </CardGroup>

                <Button  style={{ margin: '30px'}} color="primary">Add New Application</Button>{' '}
                <JobList user="tester"/> {/*{this.state.user}/>*/}
            </React.Fragment>



        )
    }
}

