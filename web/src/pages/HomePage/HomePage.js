// web/src/pages/HomePage/HomePage.js

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell.js'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>Taking Fullstack to the Jamstack</p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage