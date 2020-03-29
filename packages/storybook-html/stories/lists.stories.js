// import styles
import '../src/components/lists/lists.scss';

// import HTML template strings
import listsHTML from '../src/components/lists/lists.html';


export default {
  title: 'Lists'
};

export const lists = () => {
  return document.createElement('div').innerHTML = listsHTML;
};