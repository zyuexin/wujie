import React, { useEffect , useState} from "react";
import { NavLink, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Dialog from "./Dialog";
import Location from "./Location";
import Communication from "./Communication";
import React17 from "./nest";
import Font from "./Font";
import logo from "./logo.svg";
import Tag from "antd/es/tag";
import Button from "antd/es/button";
import Input from "antd/es/input";
import Spread from './spreadjs'
import "antd/es/tag/style/css";
import "antd/es/button/style/css";
import "antd/es/modal/style/css";
import "antd/es/select/style/css";
import "antd/es/popover/style/css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Home = () => (
  <div>
    <h2 className="css-before-flag">react16示例</h2>
    <p>
      当前react版本{" "}
      <Tag style={{ verticalAlign: "text-top" }} color="blue">
        16.13.1
      </Tag>
    </p>
    <p>
      当前antd版本{" "}
      <Tag style={{ verticalAlign: "text-top" }} color="geekblue">
        4.18.3
      </Tag>
    </p>
    <p>
      <Button onClick={() => window.open("https://github.com/Tencent/wujie/tree/master/examples/react16")}>
        仓库地址
      </Button>
    </p>
  </div>
);

function MyComponent() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default class App extends React.Component {
  state = {
      html: '',
      value: ''
  };
  render() {
      return (
          <>
              {/* <EditNode
                  enabled
                  value={this.state.html}
                  onChange={(value) => {
                      //当输入值改变，调用setState()更新的时候，不管你在哪个位置输入，光标妥妥的会跳到第一个位置
                      this.setState({ html: value });
                  }}
              /> */}
              <ReactQuill theme="snow" value={this.state.value} onChange={() => this.setState()} />;
              <Input.TextArea />
              <Spread></Spread>
          </>
      );
  }
}
