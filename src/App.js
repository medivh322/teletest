import ChannelList from './components/ChannelList';
import ChannelProgram from './components/ChannelProgram';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <ChannelList />
        <ChannelProgram />
      </div>
    </div>
  );
}

export default App;
