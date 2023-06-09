import './App.css';
import  Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <div className='principal-container' >
        <h1> Here is what our alumni say about freeCodeCamp: </h1>
      <Testimonials
      name='Shawn Wang '
      country='Singapore'
      image='shawn'
      alt= 'shawn-image'
      position='Software Engineer'
      company='Amazon'
      testimonial='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
      <Testimonials
      
      name='Sarah Chima'
      country='Nigeria'
      image='sarah'
      alt='sarah-image'
      position='Software Engineer'
      company='Chat Desk'
      testimonial=' freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
       <Testimonials
      
      name='Emma Bostian'
      country='Sweden'
      image='emma'
      alt='Emma-image'
      position='Software Engineer'
      company='Spotify'
      testimonial='I have always struggled with learning JavaScript. I ve taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
     
      </div>
    </div>
  );
}

export default App;
