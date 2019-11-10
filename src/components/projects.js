import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    switchCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://s15-us2.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Freact-1-282599.png&sp=0ab541e9b56381d27f1779f831989f87) center / cover'}} >React Project</CardTitle>
                        <CardText>
                            This React web site
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#FFF'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                )
                break;
            case 1:
                return (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://s15-us2.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Freact-1-282599.png&sp=0ab541e9b56381d27f1779f831989f87) center / cover'}} >jQuery/Chrome Plugin</CardTitle>
                        <CardText>
                            Chrome plugin for filtering Eureka URLS
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#FFF'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                )
                break;
            case 2:
                return (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://s15-us2.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Freact-1-282599.png&sp=0ab541e9b56381d27f1779f831989f87) center / cover'}} >Java/Spring Projects</CardTitle>
                        <CardText>
                            Company Projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#FFF'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                )
                break;
            case 3:
                return (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://s15-us2.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Freact-1-282599.png&sp=0ab541e9b56381d27f1779f831989f87) center / cover'}} >Flutter Project</CardTitle>
                        <CardText>
                            In-Process...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#FFF'}}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                )
                break;
        
        
            default:
                break;
        }
    }

    render() {
        return (
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>jQuery/Chrome Plugin</Tab>
                    <Tab>Java/Spring</Tab>
                    <Tab>Flutter</Tab>
                </Tabs>
                <section>
                    <div>
                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                    {this.switchCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    
                    </div>
                </section>
            </div>
        );
    }
}





export default Projects;