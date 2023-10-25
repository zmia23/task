import { Title, titleSizes } from "../components/title/Title";

import '../styles/about-view.css'

const About = () => {
  return (
    <>
      <Title text={ 'About Us' } size={ titleSizes.xlarge } weight={ 700 } />
      <div className='text-container'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet diam odio. Mauris viverra convallis congue. Suspendisse pellentesque id orci at iaculis. Vestibulum faucibus efficitur est, non commodo diam dignissim sit amet. Suspendisse id volutpat eros. Suspendisse eros diam, semper ut bibendum vitae, mattis vitae massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut lobortis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam iaculis sapien tempus blandit vulputate. Mauris vestibulum nisi magna, nec laoreet arcu molestie et. Nullam aliquam aliquet magna. Nunc vitae lobortis ipsum.
        Aliquam sit amet elementum arcu. Sed mi ipsum, mollis ac augue nec, gravida faucibus turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin auctor dui mi, a accumsan leo consequat nec. Donec est nibh, dignissim et velit id, posuere euismod odio. Donec ornare id erat a dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris justo velit, porta et finibus non, feugiat at tortor. Morbi eget malesuada sapien. Sed commodo dui non ullamcorper congue. Aenean volutpat justo sit amet dapibus placerat.
      </div>
      
    </>
  );
}

export default About
