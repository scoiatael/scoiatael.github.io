class ReactHero extends React.Component {
  render() {
    return(<h1>Loading data..</h1>);
  }
}

React.render(
    <ReactHero />,
    document.getElementById('hero-dynamic')
);
