import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'


import {Form, Icon, Input, Button, Checkbox, Spin} from 'antd'
const FormItem = Form.Item

import {signIn}  from '../actions/account'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialAccount: '',
      rememberAccount: false
    }

    this.signIn = this.signIn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRememberChange = this.handleRememberChange.bind(this)
  }

  componentWillMount() {
    console.log(window.localStorage.getItem('loginAccount'))
    if (window.localStorage.getItem('loginAccount')) {
      this.setState({
        initialAccount: window.localStorage.getItem('loginAccount'),
        rememberAccount: true
      })
    }

  }

  // 处理表单提交
  handleSubmit(e) {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      if (this.state.rememberAccount) {
        window.localStorage.setItem('loginAccount', values.mail)
      } else {
        window.localStorage.removeItem('loginAccount')
      }
      this.signIn(values)
    })
  }

  // 登陆
  signIn(params) {
    const _user = Object.assign({}, {loginType: 3}, params)
    return this.props.signIn(_user)
  }

  handleRememberChange(e) {
    this.setState({
      rememberAccount: e.target.checked
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const login = this.props.login

    return (
      <div className="login account">
        <Form onSubmit={this.handleSubmit} className="account-form login-form">
          <h3 className="form-title">
            登陆
          </h3>
          <Spin spinning={login.isFetching}>
            <FormItem>
              {getFieldDecorator('mail', {
                rules: [{required: true, message: '请输入登陆邮箱'}],
                initialValue: this.state.initialAccount
              })(
                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="请输入登陆邮箱"/>
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码',
                }, {
                  min: 8, message: '请输入不小于8位的密码'
                }],
              })(
                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="请输入密码"/>
              )}
            </FormItem>
            <FormItem>
              <Checkbox checked={this.state.rememberAccount} onChange={this.handleRememberChange}>记住账号</Checkbox>
              <Link to="/forget">忘记密码?</Link>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="block">
                登陆
              </Button>
              <Link to="/signup" style={{float: 'right'}}>立即注册＞</Link>
            </FormItem>
          </Spin>

        </Form>
      </div>

    )
  }
}


LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
}

LoginPage.propTypes = {
  login: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {login, userInfo} = state
  return {
    login,
    userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn(params){
      dispatch(signIn(params))
    }
  }
}

LoginPage = Form.create()(LoginPage)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
