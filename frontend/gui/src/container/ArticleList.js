import React from "react";
import Articles from "../components/article";
import axios from "axios";
import CustomForm from "../components/CustomForm";

class ArticleList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api").then(res => {
      this.setState({ articles: res.data });
    });
  }
  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <CustomForm requestType="post" btntype="Create" articleID={null} />
      </div>
    );
  }
}
export default ArticleList;
