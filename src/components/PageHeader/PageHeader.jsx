import { Layout } from "antd";
import logo from '../../assets/img/logo.svg'

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header className='app__header'>
      <div className="container">
        <img src={logo} alt="logo" className="app__logo" />
      </div>
    </Header>
  )
}
export default PageHeader;
