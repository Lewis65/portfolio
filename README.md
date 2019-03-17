# Portfolio

Here's my Gatsby portfolio site. It integrates with Contentful to display your projects in a portfolio as well as blog posts.

Feel free to use this repo for your own portfolio, but please make sure to include a link to my Github profile or website if you are using it online and not changing it extensively.

## Todo

- Link Tags on Post pages to relevant /tag/foo page
- Display tags on the bottom of Post Cards on Lists and link those, too
- Change projects page to use Contentful rather than hardcoded data
- Create AWS Lambda for email from contact form and call it from secrets.json
- Refactor Cards from Projects/Blogs into a shared component

## Secrets

If you're going to fork this, make sure you create a secrets.json with your Contentful information (see secrets.json.template)

You will also need to set up Project and Blog content models with the appropriate fields and field types.

Finally, you'll have to create your own AWS Lambda for sending email from the contact form.