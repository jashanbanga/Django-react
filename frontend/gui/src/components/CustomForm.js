import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;
class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleID) => {
    //event.preventDefault();
    const title = event.target.elements.Title.value;
    const content = event.target.elements.Content.value;
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(error => console.error(error));
    }
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <FormItem label="Title:">
            <Input name="Title" placeholder="Enter the title here" />
          </FormItem>
          <FormItem label="Content:">
            <Input name="Content" placeholder="Enter the content here" />
          </FormItem>
          <FormItem>
            <Button htmlType="submit" type="primary">
              {this.props.btntype}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default CustomForm;
