# Interface Development Test

## Technologies used and comments
* React using Vite. Using React with Vite can significantly improve the developer experience, reduce build times, and optimize the performance of web applications. React is industry defacto standard when it comes to designing UI/UX. Using a proven library will make maintenance and any handover easier.
* Vite has is own task runner minifying and bundling JavaScript assets. It's recommended by React, and is the new mainstream builder  (it is also significantly faster than webpack)
* Used Modal-react library to handle image display on click. I could have used the native html5 dialog tag, and manually manage the modal, but for efficiency sake, went with a battle-tested 3rd party library.
* Used built-in css animations (No need to bring the big guns like react-spring for a simple case.)
