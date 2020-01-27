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
                            <Button colored><a href="https://github.com/crgmonroe/react-site" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
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
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://brand.jquery.org/resources/jquery-mark-dark.gif) center / cover'}} >jQuery/Chrome Plugin</CardTitle>
                        <CardText>
                            Chrome plugin for filtering Eureka URLS
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://chrome.google.com/webstore/detail/get-your-swagger-on-exten/laiifiejbjcokjpkhafleafakaopafdd" target="_blank" rel="noopener noreferrer">Chrome Web Store</a></Button>
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
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://lilly021.com/wp-content/uploads/2019/07/springBoot_featured_image-1024x549.png) center / cover'}} >Java/Spring Projects</CardTitle>
                        <CardText>
                            Company Projects
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://developer.ebsco.com/interactive/linkiq" target="_blank" rel="noopener noreferrer">LINKIQ</a></Button>
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
                        <CardTitle style={{color: '#FFF', height: '176px', background: 'url(https://cdn.neow.in/news/images/uploaded/2019/07/1562839325_product_28668_product_shots1_story.jpg) center / cover'}} >Flutter Project</CardTitle>
                        <CardText>
                            In-Process...
                        </CardText>
                        <CardActions border>
                            <Button colored>Flutter Mobile App</Button>
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