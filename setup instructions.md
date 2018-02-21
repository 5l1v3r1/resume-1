# Expandable Resume

## How to use this:

For each job, you can click on the link and learn more about the job.

## Why did I build this?
- **To simplify my resume** - Single page resume's are great, and I found myself wanting to provide more details if people asked.
- **Get more detail** - Interviewers who want more details can click on each job, and see a more detailed CV with all of the details they might seek
- **Save time** for everyone
- **Because getting a job is time expensive** - We put so many layers in between a job seeker and the decision maker

Job seeker -> Recruiter -> Automated filter -> Human Resources -> Rounds of tests -> Interviewer -> Decision Maker
            (potentially)  (potentially)

## Built with:
- React.js
- ES6 Javascript ECMA6
- CSS Modules
- Serverless
- Static CMS - [Contentful](http://contentful.com)
- Design [Material UI](http://www.material-ui.com/#/)
- [Create React App](https://github.com/facebook/create-react-app)

## Benefits for:

#### Job hunters

It's time consuming for candidates to:
  - Update their resume
  - Customise a resume for each position
- We don't know who is reading it, so can either provide them with too much or too little details

#### Interviewer

- **Find the right person** Great job hunters are too busy working on great projects, so don't apply.
It's time consuming for interviewers to:
- **More detail in less time** - It takes forever to read through a 6 page resume. This way they can see a short teaser resume, and get more detail if necessary.
- **Roadmap:** skip the resume all together

## Roadmap
- **Data driven** - Provides a heatmap so we can see what interviewers care about, to provide a data driven way to automatically improve resumes
- Add UI design previews
- Quickly tailor resumes - Job seekers select the relevant entries, and then click to generate a unique PDF and website for each job they're applying for
- **tl;dr:** Automate matching the right person with a job
- Import job history from Linkedin, StackOverflow, standardised coding tests, etc.
- Coach people through interviews


____________________________________________________________________

## Folder Structure

```
resume-adaptive/
  public/
    index.html
    favicon.ico
    _redirects
  src/
    components/
      App/
        App.jsx
        App.css
        App.test.js
      Education/
      Footer/
      Header/
      Jobs/
      Menu/
      Skills/
      utils/
    css
    fonts
    images
    layout
  history
    index.css
    index.js
    logo.svg
  .babelrc - for ESLint setup
  .netlify
  package.json
  README.md
```
