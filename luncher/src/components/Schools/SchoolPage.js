import React, { Component } from 'react'
import Authenticate from '../../authentication/Authenticate';
import DonateForm from '../Donations/DonateForm';
import { Progress, Button, Collapse } from 'reactstrap';
import EditSchool from './EditSchool';
import { Link } from 'react-router-dom';

class SchoolPage extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      thisSchool: this.props.match.params.id
    }
  }

  componentDidMount(){
    this.props.getSchool(this.state.thisSchool);
    console.log(this.props)
  }

  componentDidUpdate(prevProps){
    if(this.props.thisSchool !== prevProps.thisSchool){
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ thisSchool: nextProps.thisSchool })
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.thisSchool.id !== this.state.thisSchool.id) {
  //     this.props.getSchool(this.state.thisSchool);
  //   }
  // }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleDeleteSchool = () => {
    const requestOptions = {
      'Authorization': `${localStorage.getItem('jwt')}`
    }
    this.props.removeSchool(this.state.thisSchool, requestOptions)
  }

  renderProgress() {
    const one = this.props.thisSchool.donated
    const two = this.props.thisSchool.requested_funds
    console.log(this.props.thisSchool.requested_funds)
    const progress = Math.round((one / two) * 100);
    console.log(progress)
    return progress;
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="school-page">

          <section className="splash">
            <div className="splash-image">
              <div className="splash-overlay"></div>
            </div>
            <div className="schoolPage">
              <div className="schoolPageFull">
                <Authenticate />
                <div className="schoolPageInfo">
                <h2>
                  {this.props.thisSchool.name}
                </h2>
                <div className="schoolAbout">
                  About: {this.props.thisSchool.description}
                </div>
                <Progress animated color="info" value={this.renderProgress()}>{this.renderProgress()}%</Progress>
                <div className="donateTtl">
                  Total amount donated: ${this.props.thisSchool.donated}
                </div>
              </div>

              <div className="donateHold">
                <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Donate Now</Button>
                <Collapse {...this.props} isOpen={this.state.collapse}>
                <DonateForm donateschool={this.props.thisSchool}
                            donated={this.props.thisSchool.donated}
                            id={this.props.thisSchool.id}
                            giveDonation={this.props.giveDonation} />
                </Collapse>
              </div>
              <div className="adminTasks">
                <EditSchool 
                        id={this.props.thisSchool.id}
                        name={this.props.thisSchool.name}
                        description={this.props.thisSchool.description}
                        address={this.props.thisSchool.address}
                        requested_funds={this.props.thisSchool.requested_funds}
                        userInfo={this.props.userInfo}
                        editSchool={this.props.editSchool}
                        />
                <Button color="danger" onClick={this.handleDeleteSchool}>Delete</Button>
              </div>
            </div>
          </div>
          </section>

              
              







          <section>
            <a href="#contact" className="divider"><i className="leading-arrow fas fa-arrow-alt-circle-down"></i></a>
          </section>

          <section className="container-basic sign-in-footer">
            
            <section className="contact" id="contact">
              <div className="grid-col-4">
                <h3>Contact Us</h3>

                <p className=" icon">
                  <i className="fas fa-envelope"></i>
                </p>
                <p className=" text" id="mapid">
                  get@luncher.app
                </p>
                <Link to=''><i className="social fab fa-twitter"></i></Link>
                <p className="social-text">Follow us on Twitter!</p>
                
                <p className=" icon">
                  <i className="fas fa-phone"></i>
                </p>
                <p className=" text" id="mapid">
                  1-800-YUM-GIFT
                </p>
                <Link to=''><i className="social fab fa-patreon"></i></Link>
                <p className="social-text">Be our patrons on Patreon!</p>

                <p className=" icon">
                  <i className="fas fa-map-marker-alt"></i>
                </p>
                <p className=" text" id="mapid">
                  111 Yosemite Way<br></br>
                  Mendocino, CA
                </p>
                <Link to=''><i className="social fas fa-share-square"></i></Link>
                <p className="social-text">Share this page!</p>

              </div>
            </section>

          </section>


          <footer>
            <p>Copyright Luncher 2019</p>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}


export default SchoolPage;