// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
// import Popup from './popup';

interface appstate {
  Lib: string[];
  set_ind: number;
  options: Highcharts.Options;
}

export default class App extends Component<HighchartsReact.Props, appstate> {
  constructor(props: any) {
    super(props);
    this.state = {
      Lib: [],
      set_ind: 0,
      options: {
        title: {
          text: "My chart",
        },
        series: [
          {
            type: "line",
            data: [1, 2, 3],
          },
        ],
      },
    };
  }

  apicall = (e: React.MouseEvent<HTMLButtonElement>) => {
    $.ajax({
      url: "https://633686e465d1e8ef266ddf9f.mockapi.io/x1/sample",
      contentType: "application/json",
    }).done(
      function (this: any, data: string[]) {
        this.setState({ Lib: data });
      }.bind(this)
    );
  };

  render() {
    console.log(this.state.Lib);
    return (
      <div>
        <button
          className="btn btn-success"
          style={{ position: "relative", left: "100px" }}
          onClick={(e) => this.apicall(e)}
        >
          View Details
        </button>
        <br />
        <br />
        <div>
          <table className="table">
            <tbody>
              {this.state.Lib.length ? (
                <tr>
                  <th>Emp ID</th>
                  <th>Name</th>
                  <th>Project</th>
                  <th>Position</th>
                </tr>
              ) : (
                ""
              )}
              {this.state.Lib.map((x: any, index: number) => (
                <tr key={index}>
                  <td>{x.empid}</td>
                  <td onClick={(e) => this.setState({ set_ind: index })}>
                    {x.name}
                  </td>
                  <td>{x.Project}</td>
                  <td>{x.Position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.options}
          />
        </div>
        {/* {this.state.Lib.length ? <div><Popup pr={this.state.Lib}Ind={this.state.set_ind}/></div> : " "} */}
      </div>
    );
  }
}

// import {
//   makeStyles,
//   Container,
//   TextField,
//   Button,
//   Typography,
// } from "@material-ui/core";
// import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   heading: {
//     textAlign: "center",
//     margin: theme.spacing(1, 0, 4),
//   },
//   submitButton: {
//     marginTop: theme.spacing(4),
//   },
// }));

// function App() {
//   const { heading, submitButton } = useStyles();

//   const [json, setJson] = useState<string>();

//   return (
//     <Container maxWidth="xs">
//       <form>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           label="Email"
//           fullWidth
//           required
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           label="Password"
//           type="password"
//           fullWidth
//           required
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={submitButton}
//         >
//           Sign Up
//         </Button>
//         {json && (
//           <>
//             <Typography variant="body1">
//               Below is the JSON that would normally get passed to the server
//               when a form gets submitted
//             </Typography>
//             <Typography variant="body2">{json}</Typography>
//           </>
//         )}
//       </form>
//     </Container>
//   );
// }

// export default App;
