// import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
//
// class ContactModal extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//     };
//   }
//
//   handleExpandChange = (expanded) => {
//     this.setState({expanded: expanded});
//   };
//
//   handleToggle = (event, toggle) => {
//     this.setState({expanded: toggle});
//   };
//
//   handleExpand = () => {
//     this.setState({expanded: true});
//   };
//
//   handleReduce = () => {
//     this.setState({expanded: false});
//   };
//
//   render() {
//     return (
//       <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
//         <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
//         <CardText expandable={true}>
//           <FlatButton label="Phone" />
//           <FlatButton label="Email" />
//           <FlatButton label="Write" />
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//         </CardText>
//         <CardActions>
//           <FlatButton label="Expand" onClick={this.handleExpand} />
//           <FlatButton label="Reduce" onClick={this.handleReduce} />
//         </CardActions>
//       </Card>
//     );
//   }
// }
//
// export default ContactModal;
