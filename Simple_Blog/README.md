# ✍️ React Blog App

A simple blog app built with React. Write a title and some content, hit
publish, and your post appears instantly below the form.

## Features

- Add blog posts with a title and content
- Newest post is shown first
- Animated UI: moving gradient background, bouncing cards, glowing inputs
- Empty-state message when there are no posts
- Respects reduced-motion system settings

## Built With

- React (useState hook)
- CSS animations and transitions

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the app
   ```bash
   npm run dev
   ```

## How It Works

- `title` and `content` states hold the form inputs
- `blogs` state holds the list of posts
- Submitting the form adds a new post object to the top of the list
- `blogs.map()` renders each post as a card

## Notes

Posts are stored in React state only, so they reset when the page is
refreshed.

## Future Ideas

- Save posts with localStorage
- Delete and edit posts
- Dark mode toggle
