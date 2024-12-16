import React, { useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, useHistory, useLocation } from "react-router-dom";
import Dialog from "./Dialog";
import Location from "./Location";
import Communication from "./Communication";
import State from "./State";
import Tag from "antd/es/tag";
import Button from "antd/es/button";
import Input from "antd/es/input";
// import Spread from './spreadjs'
import "antd/es/tag/style/css";
import "antd/es/button/style/css";
import "antd/es/modal/style/css";
import "antd/es/select/style/css";
import "antd/es/popover/style/css";

const basename = process.env.NODE_ENV === "production" ? "/demo-react17/" : "";

const Home = () => (
  <div>
    <Button onClick={() => {
        console.log(getSelection())
      }}>getSelection</Button>
    <h2>react17示例</h2>
    <p>
      当前react版本{" "}
      <Tag style={{ verticalAlign: "text-top" }} color="blue">
        17.0.2
      </Tag>
    </p>
    <p>
      当前antd版本{" "}
      <Tag style={{ verticalAlign: "text-top" }} color="geekblue">
        4.18.3
      </Tag>
    </p>
    <p>
      <Button onClick={() => window.open("https://github.com/Tencent/wujie/tree/master/examples/react17")}>
        仓库地址
      </Button>
    </p>
  </div>
);

function Nav() {
  const history = useHistory();
  const routerJump = path =>  history.push(path)
  // 主应用告诉子应用跳转路由
  useEffect(() => {
    window.$wujie?.bus.$on("react17-router-change", routerJump);
  }, [])

  // 在 react17-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
  const location = useLocation()
  useEffect(() => {
    window.$wujie?.bus.$emit('sub-route-change', "react17", location.pathname)
  }, [location])

  return (
    <nav>
    <NavLink to="/home">首页</NavLink> | <NavLink to="/dialog">弹窗</NavLink> |{" "}
    <NavLink to="/location">路由</NavLink> | <NavLink to="/communication">通信</NavLink> |{" "}
    <NavLink to="/state">状态</NavLink>
  </nav>

  )
}

class App extends React.Component {
  state = {
      html: ''
  };

  componentDidMount() {
      window.addEventListener('keydown', () => {
        // console.log('123213')
      }, false)
  }

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
              <Input.TextArea />
              {/* <Spread></Spread> */}
          </>
      );
  }
}

export default App;
