import styled from 'styled-components'

export const LoginWrapper =styled.div`
  width:100%;
  background:#eee;
  height:900px;
  z-index:0;
  overflow:hidden;
`

export const LoginBox =styled.div`
  width:480px;
  height:260px;
  margin:80px auto;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  padding-top:40px
`

export const Input =styled.input`
  display:block;
  width:200px;
  height:30px;
  line:height:30px;
  color:#777;
  padding:0 10px;
  margin:10px auto;
`

export const Button =styled.div`
  width:220px;
  height:30px;
  line-height:30px;
  color:#fff;
  background:#3194d0;
  border-radius:15px;
  margin:40px auto;
  text-align:center;
  cursor:pointer;
`