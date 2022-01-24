import 'antd/dist/antd.css';
import './App.sass';
import PageHeader from './components/PageHeader/PageHeader';
import CardWrapper from './components/CustomCard/CardWrapper';

const App = () => {
  return (
    <div className="app">
      <PageHeader />
      <CardWrapper />
    </div>
  );
}

export default App;
