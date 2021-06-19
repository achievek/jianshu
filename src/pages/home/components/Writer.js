import React, { PureComponent } from 'react'
import {WriterWrapper,WriterTitle} from '../style'

export default class Write extends PureComponent {
  render() {
    return (
      <WriterWrapper>
          <WriterTitle>
              <span className="intro">推荐作者</span>
              <span className="change">换一批</span>
              <i></i>
          </WriterTitle>
      </WriterWrapper>
    )
  }
}
