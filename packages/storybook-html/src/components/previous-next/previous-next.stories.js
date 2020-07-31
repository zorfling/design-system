import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './previous-next.scss';

// import HTML template strings
import previousNextHTML from './previous-next.html';

// documentation
import docs from './previous-next.docs.mdx';

export default {
  title: 'Components/Previous Next',
  parameters: {
    docs: {
      page: docs
    }
  },
  decorators: [expandedStory]
};

export const previousNext = () => {
  return previousNextHTML;
};

previousNext.story = {
  name: 'Previous Next'
}

export const previousNextFirst = () => {
  return `
    <div class="previous-next">
      <div class="previous-next__item previous-next__item--hidden">
        <a href="#" class="previous-next__link-previous">Enrolment basics <span class="previous-next__description">Previous</span></a>
      </div>

      <div class="previous-next__item">
        <a href="#" class="previous-next__link-next">How to enrol <span class="previous-next__description">Next</span></a>
      </div>
    </div>
  `;
};

previousNextFirst.story = {
  name: 'Previous Next First'
}

export const previousNextLast = () => {
  return `
    <div class="previous-next">
      <div class="previous-next__item">
        <a href="#" class="previous-next__link-previous">Enrolment basics <span class="previous-next__description">Previous</span></a>
      </div>

      <div class="previous-next__item previous-next__item--hidden">
        <a href="#" class="previous-next__link-next">How to enrol <span class="previous-next__description">Next</span></a>
      </div>
    </div>
  `;
};

previousNextLast.story = {
  name: 'Previous Next Last'
}