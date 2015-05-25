var my_profile_url = 'https://api.github.com/users/scoiatael';

class ReactHero extends React.Component {
  constructor() {
    this.state = { loading: true };
  }

  componentDidMount() {
    jQuery.get(my_profile_url)
      .done((data) => { console.log(data); this.setState({data: data}) })
      .fail((error) => {
          console.error(error);
          this.setState({failed: true})})
      .always(() => { this.setState({loading: false})})
      ;
  }

  render() {
    if(this.state.loading) { return(<h1>Loading data..</h1>); }
    if(this.state.failed) { return(<div/>);
    } else {
      return(
          <div>
            <img src={this.state.data.avatar_url} id='avatar' />
            <p> Followers: {this.state.data.followers} | Repositories: {this.state.data.public_repos} </p>
          </div>
          );
    }
  }
}

React.render(
    <ReactHero />,
    document.getElementById('hero-dynamic')
);
