import React from "react";

export default class Post extends React.Component {
  render() {
    const params = this.props.match.params;
    const queryParams = new URLSearchParams(this.props.location.search);

    return (
      <div>
        <h1>Post {params.id}</h1>
        <p>Query Params: {queryParams.get("query")}</p>
      </div>
    );
  }
}
