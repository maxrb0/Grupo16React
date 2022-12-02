import { Component } from "react";

class CalculoApi extends Component {
  constructor(props) {
    super();
    this.state = {
      valor: props.value,
      gif: "",
    };
  }
//   async componentDidMount() {
//     await this.fetchGif();
//   }

//   fetchGif = async () => {
//     let cabecera = {
//         'Content-Type': 'application/json;',
//         'Authorization': "",
//         'Access-Control-Allow-Origin':'true'
//       }
//     let res = await fetch("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g", {
//         mode: 'cors',
//         credentials: 'include'
//       });

//     let data = await res.json();

//     this.setState({
//       gif: data.data.bitly_gif_url,
//     });
//   };

  totalUsuarios = {
    totalUsers: function (valor) {
      const usuarios = valor + 2;
      return usuarios;
    },
  };

  render() {
    return (
      <div>
        <p>{this.state.valor}</p>
      </div>
    );
  }
}
export default CalculoApi;
