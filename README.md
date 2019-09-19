# Portfolio

Here's my Gatsby portfolio site. It integrates with Contentful to display your projects in a portfolio as well as blog posts.

Feel free to use this repo for your own portfolio, but please make sure to include a link to my Github profile or website if you are using it online and not changing it extensively.

## Secrets

If you're going to fork this, make sure you create a .env with your Contentful information (see secrets.json.template)

You will also need to set up Project and Blog content models with the appropriate fields and field types in Contentful.

Finally, you'll have to create your own AWS Lambda for sending email from the contact form.

### .env
```
CONTENTFUL_SPACE_ID="Your Contentful space ID"
CONTENTFUL_ACCESS_TOKEN="Your Contentful access token"

GATSBY_CONTACT_POST_URL="The URL to POST the contact form submissions to"
```