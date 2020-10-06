import { DiscussionEmbed, CommentEmbed } from "disqus-react";

import React, { Component } from "react";
class Discuss extends Component {
  state = {};

  render() {
    return (
      <>
        <DiscussionEmbed
          shortname="angel corp"
          config={{
            url: this.props.url,
            identifier: this.props.identifier,
            title: this.props.title,
          }}
        />
      </>
    );
  }
}

export default Discuss;
