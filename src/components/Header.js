import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router';

import {Layout, Menu, Breadcrumb} from 'antd';
const BreadcrumbItem = Breadcrumb.Item
const {Header} = Layout;

import LoadingBar from 'react-redux-loading-bar'

import {fetchInfo} from '../actions/user'

class AppHeader extends Component {
  constructor(props) {
    super(props)

    this.itemRender = this.itemRender.bind(this)
    this.state = {
      breadcrumbItems: []
    }
  }

  componentDidMount() {
    this.itemRender(this.props.router.routes)
    this.props.fetchInfo()

    browserHistory.listen((ev) => {
      this.itemRender(this.context.router.routes)
    });
  }


  // 面包屑
  itemRender(routes) {
    // 配置每个item的path
    const _paths = [];
    routes.reduce((acc, current, index) => {
      let _route = '';
      if (index > 0) {
        _route = `${acc}/${current.path}`
      }
      _paths.push(_route)
      return _route
    }, '')

    // 建立 Breadcrumb Item 数组
    const _breadcrumbItems = routes.map((route, index) => {
      if (index > 1) {
        return <BreadcrumbItem key={`breadcrumb-${index}`}>
          <Link to={_paths[index]}>{route.breadcrumbName}</Link>
        </BreadcrumbItem>
      }
    })
    this.setState({
      breadcrumbItems: _breadcrumbItems
    })
  }

  render() {
    const {userInfo} = this.props
    return (
      <Header className="header app-header">
        <LoadingBar />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="logout" className="logo">
            <Link to="/page">来购</Link>
          </Menu.Item>
          <Menu.Item key="breadcrumb">
            <Breadcrumb>
              {this.state.breadcrumbItems}
            </Breadcrumb>
          </Menu.Item>

          <Menu.Item key="header-logout" style={{float: 'right'}}>
            <Link to="/">退出</Link>
          </Menu.Item>
          <Menu.Item key="header-user-name" style={{float: 'right'}}>
            <span>{userInfo.entName}</span>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

AppHeader.contextTypes = {
  router: PropTypes.object.isRequired
};


AppHeader.propTypes = {
  userInfo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const {userInfo} = state;
  return {
    userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInfo() {
      dispatch(fetchInfo({}));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
