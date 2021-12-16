# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./public/space_tourism_home.png)

### Links

- Solution URL: (https://github.com/drew-chidi/space-tourism)
- Live Site URL: (https://space-tourism-drew.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

Using @layer and @variant functions to write custom and responsive CSS classes in tailwind

```css
@layer utilities {
  @variants responsive {
    .gradient-sm {
      @apply bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600;
    }
    .gradient-md {
      @apply bg-gradient-to-b  from-transparent via-transparent to-transparent;
    }
  }
}
}
```

### Useful resources

- [Fetching Data from a JSON File](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [How To Call Web APIs with the useEffect Hook in React](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [How To Handle Async Data Loading, Lazy Loading, and Code Splitting with React](https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [How To Deploy React Router Based App On Netlify](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)

## Author

- Website - [Andrew Chidi](https://drew-portfolio.netlify.app/)
- Frontend Mentor - [@drew-chid](https://www.frontendmentor.io/profile/drew-chidi)
- Twitter - [@first_name_gr8](https://www.twitter.com/first_name_gr8)

## Acknowledgments

- Favour Ohans, for helping me debugged my codes
