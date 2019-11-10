import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    switchCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <div>
                        <h1>React</h1>
                    </div>
                )
                break;
            case 1:
                return (
                    <div>
                        <h1>jQuery/Chrome Plugin</h1>
                    </div>
                )
                break;
            case 2:
                return (
                    <div>
                        <h1>Java/Spring</h1>
                    </div>
                )
                break;
            case 3:
                return (
                    <div>
                        <h1>Flutter</h1>
                    </div>
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
                    <div className="projects-grid">
                    {this.switchCategories()}
                    </div>
                </section>
            </div>
        );
    }
}





export default Projects;