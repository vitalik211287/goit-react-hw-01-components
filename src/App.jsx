import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import styled from 'styled-components';


function App() {
  return (
    <>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics
        title="Upload stats"
        stats={data} 
      ></Statistics>
    </>
    );
    
}

export default App;
