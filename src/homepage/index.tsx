import React,{useEffect} from 'react';
import './styles.css';
import api from '../services/api';
import { getStories } from '../store/action';
import { Stories, Story } from '../store/types';
import StoryBar from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
function Index() {
    const dispatch = useDispatch();
    const storiesData: Stories = useSelector((state: any) => state.stories);
    const handleGetStoriesData = async () => {
        const stories = await api.get('/stories');
        if (stories) {
          dispatch(getStories(stories.data));
        }
      };

      useEffect(() => {
        handleGetStoriesData();
      }, []);
  return (
    <div>
          <div className='stories'>
            <h2>Stories</h2>
            {storiesData &&
              storiesData.arrayStories.map((story: Story) => (
                <StoryBar key={story.id} story={story} />
              ))}
          </div>
    </div>
  )
}

export default Index
