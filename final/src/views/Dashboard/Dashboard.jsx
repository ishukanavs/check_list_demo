import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
           <div>
             
         <GridContainer>
           
          <GridItem xs={12} sm={12} md={4}>
          <Card chart>
              <CardHeader color="danger">
               
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}> Click on it to view checklist</h4>
                <p className={classes.cardCategory}>
                   checklist
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                 <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick} className="menuu"
        ><b>...</b>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Edit</MenuItem>
          <MenuItem onClick={this.handleClose}>Delete</MenuItem>
          <MenuItem onClick={this.handleClose}>Share</MenuItem>
        </Menu>
      </div>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
           <GridItem xs={12} sm={12} md={4}>
          <Card chart>
              <CardHeader color="danger">
               
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}> Click on it to view checklist</h4>
                <p className={classes.cardCategory}>
                   checklist
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                 <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick} className="menuu"
        ><b>...</b>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Edit</MenuItem>
          <MenuItem onClick={this.handleClose}>Delete</MenuItem>
          <MenuItem onClick={this.handleClose}>Share</MenuItem>
        </Menu>
      </div>
                </div>
              </CardFooter>
            </Card>
          </GridItem> 

           
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
               
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}> Click on it to view checklist</h4>
                <p className={classes.cardCategory}>
                   checklist
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                
                 <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick} className="menuu"
        ><b>...</b>
          
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Edit</MenuItem>
          <MenuItem onClick={this.handleClose}>Delete</MenuItem>
          <MenuItem onClick={this.handleClose}>Share</MenuItem>
        </Menu>
      </div>
                </div>
              </CardFooter>
            </Card>
          </GridItem> 
        </GridContainer> 
      
        
         
        
       
      </div>
      
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
