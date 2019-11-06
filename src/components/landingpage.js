import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from './myAvatar.png';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                  <Cell col={12}>
                      <div className="avatar-container">
                      <img
                        src={logo}
                        alt="Avatar"
                        className="avatar-img" />
                        </div>
                        <div className="banner-text">
                            <h1>Software Engineer</h1>

                            <hr/>

                            <p>Java | Spring | React | HTML | Flutter | Networking</p>
                        
                        <div className="social-media-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/craig-monroe/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* EBSCO */}
                            <a href="https://www.ebsco.com/technology" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-building-o" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/cmonroeEIS/GetYourSwaggerOn" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>
                        
                        </div>
                        <div className="thank-you">
                            <p><br></br>
                                Thank you to <a href="https://www.youtube.com/channel/UCnj8dl6NWgASf4kKZLuuwfw" target="_blank" rel="noopener noreferrer">Paul Hanna</a>!
                            </p>

                        </div>
                      </Cell>  
                </Grid>
            </div>
        )
    }
}

export default Landing;