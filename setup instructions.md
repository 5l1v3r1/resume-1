# Expandable Resume

## How to use this:
You can find my Frontend Developer Resume here.

For each job, the company has the option to click on the link and learn more about the job.

## What does it do?

- **tl;dr:** Speeds up matching the right person with a job
- Quickly tailor resumes - Job seekers select the relevant entries, and then click to tailor their resume
- It then creates a unique PDF and website for each job they're applying for
- Each section of the PDF resume has a brief description of each job.
- Get more detail - Interviewers who want more details can click on each job, and see a more detailed CV with all of the details they might be looking for
- Data driven - Provides a heatmap so we can see what interviewers care about, to provide a data driven way to automatically improve resumes
- Imports history from Linkedin

## Why did I build this?
- Single page resume's are great, and I found myself wanting to provide more details if people asked.
- It saves time for everyone
- Stands out while applying for entries
- Caters for people who want a preview of a resume, and for those wanting more detail

## Benefits for:

#### Job hunters

It's time consuming for candidates to:
  - Update a resume
  - Customise a resume for each position
- We risk missing important points with cut down resumes

#### Interviewer

Find the right person
- Great job hunters are too busy working on great projects, so don't apply.

It's time consuming for interviewers to:
- Read through a 6 page resume. This way they can see a short teaser resume, and get more detail if necessary.

## Roadmap

[Trello Roadmap](https://trello.com/c/kCaGWRXu) (private)

#### Its a best guess why

Job hunter -> Recruiter -> Automated filter -> Human Resources -> Interviewer -> Decision Maker
               (maybe)      (maybe)



____________________________________________________________________

# Features

## Built with:
- Serverless
- React.js
- ES6 Javascript ECMA6
- CSS in JS
- [Contentful CMS](http://contentful.com)
- [Material UI](http://www.material-ui.com/#/)
- [Create React App](https://github.com/facebook/create-react-app)

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
